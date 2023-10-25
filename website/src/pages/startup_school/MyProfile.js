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
    },
    moreInfo: {
      moreInfo:'',
      interestedIdeas: '',
      committedToIdea:'',
    },
    coFounderPreference: {},
  });

  const [activeSection, setActiveSection] = useState('basic');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

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

  const handleNext = () => {
    const sections = ['basic', 'moreInfo', 'coFounderPreference'];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      setActiveSection(nextSection);
    }
  };

  const handleSubmit = () => {
    if (isAuthenticated) {
      const userRef = ref(db, `profiles/${user.sub}`);
      update(userRef, { [activeSection]: profileData[activeSection] })
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
      <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />

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
        {activeSection === 'moreInfo' && profileData.moreInfo && (
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
        {activeSection === 'profilePreview' && <ProfilePreviewSection profileData={profileData} />}

        <div className="flex justify-between mt-4">
          <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
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

const MoreInfoSection = ({ profileData, setProfileData }) => {
  // Function to handle changes in responsibilities
  const handleResponsibilityChange = (responsibility, isChecked) => {
    if (isChecked) {
      setProfileData((prevData) => ({
        ...prevData,
        responsibilities: [...prevData.responsibilities, responsibility],
      }));
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        responsibilities: prevData.responsibilities.filter((r) => r !== responsibility),
      }));
    }
  };

  // Function to handle changes in interests
  const handleInterestChange = (interest, isChecked) => {
    if (isChecked) {
      setProfileData((prevData) => ({
        ...prevData,
        interests: [...prevData.interests, interest],
      }));
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        interests: prevData.interests.filter((i) => i !== interest),
      }));
    }
  };


  return (
    <div className='p-20'>
      <div className="w-[702px] h-[2363px] rounded-[10px] bg-[#f9fbf2] border border-black" />
      <p className="text-lg text-left text-black">What are some ideas you're interested in pursuing?</p>
      <div>
        <input
          type="text"
          name="interestedIdeas"
          placeholder="Enter ideas you're interested in"
          value={profileData.interestedIdeas}
          onChange={(e) => setProfileData({ ...profileData, interestedIdeas: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <p className="text-[45px] text-left text-black">More About you</p>
      <div className="w-[618px] h-[54px]">
        <input
          type="radio"
          name="committedToIdea"
          value="yes"
          checked={profileData.committedToIdea === 'yes'}
          onChange={(e) => setProfileData({ ...profileData, committedToIdea: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">
          Yes, I'm committed to an idea and I want a co-founder who can help me build it
        </label>
      </div>
      <div className="w-[618px] h-[27px]">
        <input
          type="radio"
          name="committedToIdea"
          value="exploring"
          checked={profileData.committedToIdea === 'exploring'}
          onChange={(e) => setProfileData({ ...profileData, committedToIdea: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">
          I have some ideas, but I'm also open to exploring other ideas
        </label>
      </div>
      <div className="w-[618px] h-[54px]">
        <input
          type="radio"
          name="committedToIdea"
          value="no"
          checked={profileData.committedToIdea === 'no'}
          onChange={(e) => setProfileData({ ...profileData, committedToIdea: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">
          No, I could help a co-founder with their existing idea or explore new ideas together
        </label>
      </div>
      <p className="text-lg text-left">
        <span className="text-lg text-left text-black">Do you already have a co-founder?</span>
      </p>
      <div className="w-[152px] h-[27px]">
        <input
          type="radio"
          name="hasCoFounder"
          value="yes"
          checked={profileData.hasCoFounder === 'yes'}
          onChange={(e) => setProfileData({ ...profileData, hasCoFounder: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">Yes</label>
      </div>
      <div className="w-[152px] h-[27px]">
        <input
          type="radio"
          name="hasCoFounder"
          value="no"
          checked={profileData.hasCoFounder === 'no'}
          onChange={(e) => setProfileData({ ...profileData, hasCoFounder: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">No</label>
      </div>
      <p className="text-lg text-left">
        <span className="text-lg text-left text-black">
          When do you want to start working on a startup full-time?
        </span>
      </p>
      <p className="text-xs text-left text-black">
        i.e. leave your job / school to be a full-time founder
      </p>
      <div className="w-[618px] h-[27px]">
        <input
          type="radio"
          name="fullTimeTiming"
          value="alreadyFullTime"
          checked={profileData.fullTimeTiming === 'alreadyFullTime'}
          onChange={(e) => setProfileData({ ...profileData, fullTimeTiming: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">I'm already full-time on my startup</label>
      </div>
      <div className="w-[618px] h-[27px]">
        <input
          type="radio"
          name="fullTimeTiming"
          value="readyToGo"
          checked={profileData.fullTimeTiming === 'readyToGo'}
          onChange={(e) => setProfileData({ ...profileData, fullTimeTiming: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">
          I'm ready to go full-time as soon as I meet the right co-founder
        </label>
      </div>
      <div className="w-[618px] h-[27px]">
        <input
          type="radio"
          name="fullTimeTiming"
          value="nextYear"
          checked={profileData.fullTimeTiming === 'nextYear'}
          onChange={(e) => setProfileData({ ...profileData, fullTimeTiming: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">I'm planning to go full-time in the next year</label>
      </div>
      <div className="w-[618px] h-[27px]">
        <input
          type="radio"
          name="fullTimeTiming"
          value="noSpecificPlans"
          checked={profileData.fullTimeTiming === 'noSpecificPlans'}
          onChange={(e) => setProfileData({ ...profileData, fullTimeTiming: e.target.value })}
        />
        <label className="ml-2 text-lg text-left text-black">I don't have any specific plans yet</label>
      </div>
      <p className="text-lg text-left">
        <span className="text-lg text-left text-black">Which areas of a startup are you willing to take responsibility?</span>
      </p>
      <div>
        <input
          type="checkbox"
          name="responsibilities"
          value="product"
          checked={profileData.responsibilities.includes('product')}
          onChange={(e) => handleResponsibilityChange('product', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Product</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="responsibilities"
          value="engineering"
          checked={profileData.responsibilities.includes('engineering')}
          onChange={(e) => handleResponsibilityChange('engineering', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Engineering</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="responsibilities"
          value="design"
          checked={profileData.responsibilities.includes('design')}
          onChange={(e) => handleResponsibilityChange('design', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Design</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="responsibilities"
          value="salesMarketing"
          checked={profileData.responsibilities.includes('salesMarketing')}
          onChange={(e) => handleResponsibilityChange('salesMarketing', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Sales & Marketing</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="responsibilities"
          value="operations"
          checked={profileData.responsibilities.includes('operations')}
          onChange={(e) => handleResponsibilityChange('operations', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Operations</label>
      </div>
      <p className="text-lg text-left">
        <span className="text-lg text-left text-black">Which topics and industries are you interested in?</span>
      </p>
      <div>
        <input
          type="checkbox"
          name="interests"
          value="agriculture"
          checked={profileData.interests.includes('agriculture')}
          onChange={(e) => handleInterestChange('agriculture', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Agriculture</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="interests"
          value="ai"
          checked={profileData.interests.includes('ai')}
          onChange={(e) => handleInterestChange('ai', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">AI</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="interests"
          value="design"
          checked={profileData.interests.includes('design')}
          onChange={(e) => handleInterestChange('design', e.target.checked)}
        />
        <label className="ml-2 text-base text-left text-black">Design</label>
      </div>
      {/* Continue with more interests and other input fields */}
    </div>
  );
};


const CoFounderPreferenceSection = ({ profileData, setProfileData }) => {
  // Render and edit co-founder preferences fields here
};

const ProfilePreviewSection = ({ profileData }) => {
  // Display a preview of the user's profile based on the data
  // Update the code based on your specific profile display
};

export default MyProfile;
