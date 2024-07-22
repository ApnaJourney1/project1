import React, { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '../services/api';

function EditProfilePage() {
  const [profile, setProfile] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      const data = await apiRequest(`/profiles/edit`);
      setProfile(data);
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Profile Page</h1>
      {/* Form to edit profile */}
    </div>
  );
}

export default EditProfilePage;

