import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../services/api';
import { useAuth } from '../services/auth';

function DashboardPage() {
  const [userProfiles, setUserProfiles] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchUserProfiles();
    }
  }, [user]);

  const fetchUserProfiles = async () => {
    try {
      const data = await apiRequest('/profiles/user');
      setUserProfiles(data);
    } catch (error) {
      console.error('Failed to fetch user profiles', error);
    }
  };

  return (
    <div>
      <h1>Your Dashboard</h1>
      <Link to="/create-profile">Create New Profile</Link>
      <h2>Your Profiles</h2>
      {userProfiles.map(profile => (
        <div key={profile._id}>
          <h3>{profile.name}</h3>
          <Link to={`/profiles/${profile._id}`}>View</Link>
          <Link to={`/profiles/${profile._id}/edit`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;
