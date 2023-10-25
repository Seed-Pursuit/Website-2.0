import React, { useEffect, useState } from 'react';
import {app} from '../../db/Firebase';
import { getDatabase, ref, update } from 'firebase/database';
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
    const userRef = ref(db, `profiles/${user.sub}`); 

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
  // You can render and edit basic information fields here
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
