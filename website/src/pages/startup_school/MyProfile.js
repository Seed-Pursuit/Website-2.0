import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import { getDatabase, ref, update } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../find_a_co_founder/Sidebar';

const MyProfile = () => {
  const db = getDatabase(app);
  // const { user } = useAuth0();

  const [profileData, setProfileData] = useState({
    basic: {
      firstName: '',
      lastName: '',
      // email: user.email,
      email: '',
      pronouns: '',
      bio: '',
      profileImage: null,
    },
    moreInfo: {
    },
    coFounderPreference: {
    },
  });

  const [activeSection, setActiveSection] = useState('basic');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleSubmit = () => {
    // const userRef = ref(db, `profiles/${user.sub}`); 
    const userRef = ref(db, `profiles`);

    update(userRef, { [activeSection]: profileData[activeSection] })
      .then(() => {
        setConfirmationMessage('Profile updated successfully.');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-4">
        {confirmationMessage && (
          <div className="text-yellow-500 text-2xl font-bold">{confirmationMessage}</div>
        )}
        {activeSection === 'basic' && (
          <BasicInfoSection
            profileData={profileData.basic}
            setProfileData={(data) => setProfileData({ ...profileData, basic: data })}
          />
        )}
        {activeSection === 'moreInfo' && (
          <MoreInfoSection
            profileData={profileData.moreInfo}
            setProfileData={(data) => setProfileData({ ...profileData, moreInfo: data })}
          />
        )}
        {activeSection === 'coFounderPreference' && (
          <CoFounderPreferenceSection
            profileData={profileData.coFounderPreference}
            setProfileData={(data) => setProfileData({ ...profileData, coFounderPreference: data })}
          />
        )}
        {activeSection === 'profilePreview' && (
          <ProfilePreviewSection profileData={profileData} />
        )}

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
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
      <div className="mb-4">
        <label className="block text-gray-300">Profile Picture</label>
        <img src={profileData.profileImage} alt="Profile" />
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

const MoreInfoSection = ({ profileData, setProfileData }) => {
  // Render and edit additional information fields here
};

const CoFounderPreferenceSection = ({ profileData, setProfileData }) => {
  // Render and edit co-founder preferences fields here
};

const ProfilePreviewSection = ({ profileData }) => {
  // Display a preview of the user's profile based on the data
  // Update the code based on your specific profile display
};

export default MyProfile;
