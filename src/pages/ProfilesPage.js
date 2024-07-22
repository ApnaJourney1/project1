import React, { useEffect, useState, useCallback } from 'react';

const ProfilesPage = () => {
    const [profiles, setProfiles] = useState([]);

    const fetchProfiles = useCallback(async () => {
        const response = await fetch('/api/profiles');
        const data = await response.json();
        setProfiles(data);
    }, []); // No dependencies, fetchProfiles won't change

    useEffect(() => {
        fetchProfiles();
    }, [fetchProfiles]); // Add fetchProfiles to the dependency array

    return (
        <div>
            {profiles.map(profile => (
                <div key={profile.id}>{profile.name}</div>
            ))}
        </div>
    );
};

export default ProfilesPage;







