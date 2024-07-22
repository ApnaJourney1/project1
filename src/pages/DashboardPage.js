import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../services/api';
import { useAuth } from '../services/auth';

function DashboardPage() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchUserProfiles();
      fetchStatistics();
      fetchRecentActivity();
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

  const fetchStatistics = async () => {
    try {
      const data = await apiRequest('/user/statistics');
      setStatistics(data);
    } catch (error) {
      console.error('Failed to fetch statistics', error);
    }
  };

  const fetchRecentActivity = async () => {
    try {
      const data = await apiRequest('/user/recent-activity');
      setRecentActivity(data);
    } catch (error) {
      console.error('Failed to fetch recent activity', error);
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
      
      <h2>Statistics</h2>
      {statistics && (
        <ul>
          <li>Total Profiles: {statistics.totalProfiles}</li>
          <li>Profile Views: {statistics.profileViews}</li>
          <li>Document Downloads: {statistics.documentDownloads}</li>
        </ul>
      )}
      
      <h2>Recent Activity</h2>
      <ul>
        {recentActivity.map((activity, index) => (
          <li key={index}>{activity.description} - {new Date(activity.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;

