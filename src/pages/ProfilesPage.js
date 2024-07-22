import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../services/api';

function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProfiles();
  }, [search, page]);

  const fetchProfiles = async () => {
    try {
      const data = await apiRequest(`/profiles?search=${search}&page=${page}`);
      setProfiles(data.profiles);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Failed to fetch profiles', error);
    }
  };

  return (
    <div>
      <h1>Company Profiles</h1>
      <input 
        type="text" 
        placeholder="Search profiles" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {profiles.map(profile => (
        <div key={profile._id}>
          <h2>{profile.name}</h2>
          <p>Industry: {profile.industry}</p>
          <Link to={`/profiles/${profile._id}`}>View Details</Link>
        </div>
      ))}
      <div>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default ProfilesPage;




