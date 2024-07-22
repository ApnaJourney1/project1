import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { apiRequest } from '../services/api';

function ProfileDetailPage() {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, [id]);

  const fetchProfile = async () => {
    try {
      const data = await apiRequest(`/profiles/${id}`);
      setProfile(data);
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      try {
        await apiRequest(`/profiles/${id}`, 'DELETE');
        navigate('/profiles');
      } catch (error) {
        alert('Failed to delete profile. Please try again.');
      }
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Industry: {profile.industry}</p>
      <p>Description: {profile.description}</p>
      <Link to={`/profiles/${id}/edit`}>Edit Profile</Link>
      <button onClick={handleDelete}>Delete Profile</button>
    </div>
  );
}

export default ProfileDetailPage;

