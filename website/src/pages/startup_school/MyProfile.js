import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import { get, getDatabase, ref, update } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../find_a_co_founder/Sidebar';

const MyProfile = () => {
  const db = getDatabase(app);
  const { user, isAuthenticated } = useAuth0();
  const [profileData, setProfileData] = useState({
    basic: {
      firstName: '',
      lastName: '',
      email: user.email,
      pronouns: '',
      bio: '',
      profileImage: null,
      interestedIdeas: '',
      committedToIdea: '',
      coFounderPreferences:"",
    },
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      const userRef = ref(db, `profiles/${user.sub}`);
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log(userData);
            setProfileData(userData);
          }
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
        });
    }
  }, [isAuthenticated, user.sub]);



  const handleSubmit = () => {
    if (isAuthenticated) {
      const userRef = ref(db, `profiles/${user.sub}`);
      update(userRef, { profileData })
        .then(() => {
          setConfirmationMessage('Profile updated successfully.');
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    }
  };

  return (
    <div className="flex p-20">
      <Sidebar />
      <div className="flex-1 p-4">
        {confirmationMessage && (
          <div className="text-yellow-500 text-2xl font-bold">{confirmationMessage}</div>
        )}

        <BasicInfoSection
          profileData={profileData.basic}
          setProfileData={(data) => setProfileData({ ...profileData, basic: data })}
        />

        {/* Button for saving the entire form */}
        <div className="flex justify-center mt-4">
          <button onClick={handleSubmit} className="bg-yellow-500 text-white py-2 px-4 rounded">
            Save
          </button>
        </div>
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
      <div className="mb-4">
        <label className="block text-gray-300">1-Minute Video</label>
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={(e) => setProfileData({ ...profileData, video: e.target.files[0] })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Impressive Accomplishment</label>
        <textarea
          name="accomplishment"
          placeholder="Share an impressive accomplishment..."
          value={profileData.accomplishment}
          onChange={(e) => setProfileData({ ...profileData, accomplishment: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Education</label>
        <input
          type="text"
          name="education"
          placeholder="E.g., Bachelor's in Computer Science"
          value={profileData.education}
          onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
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
        <label className="block text-gray-300">Programming Skills</label>
        <input
          type="text"
          name="programmingSkills"
          placeholder="E.g., JavaScript, Python, React"
          value={profileData.programmingSkills}
          onChange={(e) => setProfileData({ ...profileData, programmingSkills: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Gender</label>
        <select
          name="gender"
          value={profileData.gender}
          onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Date of Birth</label>
        <input
          type="date"
          name="birthday"
          value={profileData.birthday}
          onChange={(e) => setProfileData({ ...profileData, birthday: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Scheduling URL (Calendly, Google Meet, etc.)</label>
        <input
          type="text"
          name="schedulingUrl"
          placeholder="E.g., https://calendly.com/johndoe"
          value={profileData.schedulingUrl}
          onChange={(e) => setProfileData({ ...profileData, schedulingUrl: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Additional Information</label>
        <textarea
          name="additionalInfo"
          placeholder="Add any additional information here..."
          value={profileData.additionalInfo}
          onChange={(e) => setProfileData({ ...profileData, additionalInfo: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
    </div>
  );
};


export default MyProfile;
