import React, { useState, useEffect } from 'react';
import Sidebar from '../find_a_co_founder/Sidebar';
import { Link } from 'react-router-dom';

const DiscoverProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setProfiles(data.results));
  }, []);

  const handleConnect = (profile) => {
    alert(`Connection request sent to ${profile.name.first} ${profile.name.last}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="py-20">
        <h2 className="text-2xl font-semibold mb-4">Discover Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-md">
              <div className="text-center">
                <img
                  src={profile.picture.large}
                  alt={`${profile.name.first} ${profile.name.last}`}
                  className="rounded-full"
                  width="100"
                />
                <h3 className="text-xl font-semibold mt-2">
                  {profile.name.first} {profile.name.last}
                </h3>
                <p className="text-gray-600">Email: {profile.email}</p>
                <p className="text-gray-600">Gender: {profile.gender}</p>
                <div>
                  <div className=''>
                    <button
                      className="bg-yellow-500 text-white py-2 px-4 rounded mt-2"
                      onClick={() => handleConnect(profile)}
                    >
                      Connect
                    </button>
                  </div>
                  <div>
                    <Link to="#"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Additional Information</h4>
                <p>
                  <strong>Location:</strong> {profile.location.city}, {profile.location.country}
                </p>
                <p>
                  <strong>Phone:</strong> {profile.phone}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverProfiles;
