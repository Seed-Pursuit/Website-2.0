import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import { get, getDatabase, ref, set, update } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../find_a_co_founder/Sidebar';

const MyProfile = () => {
  const db = getDatabase(app);
  const { user } = useAuth0();

  const [profileData, setProfileData] = useState({
    basic: {
      firstName: '',
      lastName: '',
      email: user.email,
      pronouns: '',
      bio: '',
      profileImage: null,
    },
    moreInfo: {},
    coFounderPreference: {},
  });

  const [activeSection, setActiveSection] = useState('basic');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const fetchProfileData = async () => {
    const userRef = ref(db, `profiles/${user.sub}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      // Load existing data if available
      const userData = snapshot.val();
      setProfileData(userData);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfileData();
    }
  }, [user]);

  const handleSubmit = () => {
    const userRef = ref(db, `profiles/${user.sub}`);

    if (profileData[activeSection]) {
      // Update data if it already exists
      update(userRef, { [activeSection]: profileData[activeSection] })
        .then(() => {
          setConfirmationMessage('Profile updated successfully.');
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    } else {
      // Create a new section if it doesn't exist
      set(userRef, { [activeSection]: profileData[activeSection] })
        .then(() => {
          setConfirmationMessage('Profile section added successfully.');
        })
        .catch((error) => {
          console.error('Error adding profile section:', error);
        });
    }
  };


  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-20">
        {confirmationMessage && (
          <div className="text-yellow-500 text-2xl font-bold">{confirmationMessage}</div>
        )}
        <BasicInfoSection
          profileData={profileData.basic}
          setProfileData={(data) => setProfileData({ ...profileData, basic: data })}
        />

        <button
          onClick={handleSubmit}
          className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};
const BasicInfoSection = ({ profileData, setProfileData }) => {
  const { user } = useAuth0();
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
      <div className="mb-4">
        <label className="block text-gray-300">Profile Picture</label>
        <img src={user.picture} alt="Profile" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="E.g., John"
          value={profileData.firstName}
          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="E.g., Doe"
          value={profileData.lastName}
          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="E.g., john.doe@example.com"
          value={profileData.email}
          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">LinkedIn URL</label>
        <input
          type="text"
          name="linkedin"
          placeholder="E.g., https://www.linkedin.com/in/johndoe"
          value={profileData.linkedin}
          onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Location</label>
        <input
          type="text"
          name="location"
          placeholder="E.g., New York, NY"
          value={profileData.location}
          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Impressive Accomplishment</label>
        <textarea
          name="impressiveAccomplishment"
          placeholder="Share an impressive accomplishment..."
          value={profileData.impressiveAccomplishment}
          onChange={(e) => setProfileData({ ...profileData, impressiveAccomplishment: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Employment</label>
        <input
          type="text"
          name="employment"
          placeholder="E.g., Software Engineer at ABC Inc."
          value={profileData.employment}
          onChange={(e) => setProfileData({ ...profileData, employment: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Are you a programmer?</label>
        <select
          name="isProgrammer"
          value={profileData.isProgrammer}
          onChange={(e) => setProfileData({ ...profileData, isProgrammer: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Scheduling URL</label>
        <input
          type="text"
          name="schedulingUrl"
          placeholder="E.g., https://your-scheduling-url.com"
          value={profileData.schedulingUrl}
          onChange={(e) => setProfileData({ ...profileData, schedulingUrl: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Additional Info</label>
        <textarea
          name="additionalInfo"
          placeholder="Provide any additional information..."
          value={profileData.additionalInfo}
          onChange={(e) => setProfileData({ ...profileData, additionalInfo: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
    </div>
  );
};

export default MyProfile;
