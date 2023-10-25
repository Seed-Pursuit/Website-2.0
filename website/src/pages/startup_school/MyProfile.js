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
        <label className="block text-gray-300">Introduce Yourself</label>
        <textarea
          name="introduction"
          placeholder="Introduce yourself..."
          value={profileData.introduction}
          onChange={(e) => setProfileData({ ...profileData, introduction: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      {/* Add fields for 1 min video, Impressive accomplishment, education, employment, programming skills, gender, birthday, scheduling URL, and additional info here */}
    </div>
  );
};

export default MyProfile;
