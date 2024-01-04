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
      usertype:'',
      pronouns: '',
      bio: '',
      profileImage: null,
      linkedin: '',
      location: '',
      impressiveAccomplishment: '',
      employment: '',
      education: '',
      gender: '',
      birthdate: '',
      isProgrammer: '',
      schedulingUrl: '',
      additionalInfo: '',
      videoIntroduction: '',
      additionalLinks: ''
    },
    moreInfo: {
      startupIdea: '',
      ideasInterested: '',
      alreadyHaveCoFounder: '',
      areasWillingToTakeResponsibility: '',
      topicsAndIndustriesInterested: '',
      ExpectationsForSplittingEquality: '',
      hobbiesAndInterest: ''
    },
    coFounderPreference: {
      whatAreYouLookingForInCoFounder: '',
      lookingForCoFounderWithSpecificIdea: '',
      technicalOrNonTechnicalProfiles: '',
      matchUpTiming: '',
      locationPreference: '',
      matchCandidateWhoShareYourInterest: '',
      alertForNewMatches: ''
    },
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
    <div className="flex" rounded-lg>
      <Sidebar />

      <div className="flex-1 p-20">

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
        {confirmationMessage && (
          <div className="text-yellow-500 text-2xl font-bold">{confirmationMessage}</div>
        )}
      </div>
    </div>
  );
};
const BasicInfoSection = ({ profileData, setProfileData }) => {
  const { user } = useAuth0();
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 ">Basic Information</h3>
      <div className="mb-4">
        <label className="block text-gray-300">Profile Picture</label>
        <img src={user.picture} alt="Profile" />
      </div>
      <div>
        <label className="block text-gray-300">User Type</label>
        <select
          name="usertype"
          value={profileData.usertype}
          onChange={(e) => setProfileData({ ...profileData, usertype: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="founder">Founder</option>
          <option value="investor">Investor</option>
        </select>
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
        <label className="block text-gray-300">Bio</label>
        <textarea
          name="bio"
          placeholder="Write a short bio about yourself..."
          value={profileData.bio}
          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
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
        <label className="block text-gray-300">Are You A Programmer</label>
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
      <div className="mb-4">
        <label className="block text-gray-300">Video Introduction</label>
        <input
          type="text"
          name="videoIntroduction"
          placeholder="E.g., https://www.youtube.com/watch?v=12345"
          value={profileData.videoIntroduction}
          onChange={(e) => setProfileData({ ...profileData, videoIntroduction: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Additional Links</label>
        <input
          type="text"
          name="additionalLinks"
          placeholder="E.g., https://www.example.com"
          value={profileData.additionalLinks}
          onChange={(e) => setProfileData({ ...profileData, additionalLinks: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4">More Information</h3>
      <div className="mb-4">
        <label className="block text-gray-300">Pronouns</label>
        <input
          type="text"
          name="pronouns"
          placeholder="E.g., He/Him/His"
          value={profileData.pronouns}
          onChange={(e) => setProfileData({ ...profileData, pronouns: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Gender</label>
        <input
          type="text"
          name="gender"
          placeholder="Male, Female, Nonbinary, etc."
          value={profileData.gender}
          onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Birthdate</label>
        <input
          type="text"
          name="birthdate"
          placeholder="E.g., 01/01/2000"
          value={profileData.birthdate}
          onChange={(e) => setProfileData({ ...profileData, birthdate: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Education</label>
        <input
          type="text"
          name="education"
          placeholder="E.g., B.S. in Computer Science"
          value={profileData.education}
          onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <h3 className="text-2xl font-semibold mb-4">More Info</h3>
      <div className="mb-4">
        <label className="block text-gray-300">Startup Idea</label>
        <textarea
          name="startupIdea"
          placeholder="Describe your startup idea..."
          value={profileData.startupIdea}
          onChange={(e) => setProfileData({ ...profileData, startupIdea: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Ideas Interested</label>
        <textarea
          name="ideasInterested"
          placeholder="Describe your ideas interested..."
          value={profileData.ideasInterested}
          onChange={(e) => setProfileData({ ...profileData, ideasInterested: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Already Have Co-Founder</label>
        <select
          name="alreadyHaveCoFounder"
          value={profileData.alreadyHaveCoFounder}
          onChange={(e) => setProfileData({ ...profileData, alreadyHaveCoFounder: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Areas Willing To Take Responsibility</label>
        <textarea
          name="areasWillingToTakeResponsibility"
          placeholder="Describe your areas willing to take responsibility..."
          value={profileData.areasWillingToTakeResponsibility}
          onChange={(e) => setProfileData({ ...profileData, areasWillingToTakeResponsibility: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Topics And Industries Interested</label>
        <textarea
          name="topicsAndIndustriesInterested"
          placeholder="Describe your topics and industries interested..."
          value={profileData.topicsAndIndustriesInterested}
          onChange={(e) => setProfileData({ ...profileData, topicsAndIndustriesInterested: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Expectations For Splitting Equality</label>
        <textarea
          name="ExpectationsForSplittingEquality"
          placeholder="Describe your expectations for splitting equality..."
          value={profileData.ExpectationsForSplittingEquality}
          onChange={(e) => setProfileData({ ...profileData, ExpectationsForSplittingEquality: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Hobbies And Interest</label>
        <textarea
          name="hobbiesAndInterest"
          placeholder="Describe your hobbies and interest..."
          value={profileData.hobbiesAndInterest}
          onChange={(e) => setProfileData({ ...profileData, hobbiesAndInterest: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4">Co-Founder Preference</h3>
      <div className="mb-4">
        <label className="block text-gray-300">What Are You Looking For In Co-Founder</label>
        <textarea
          name="whatAreYouLookingForInCoFounder"
          placeholder="Describe what are you looking for in co-founder..."
          value={profileData.whatAreYouLookingForInCoFounder}
          onChange={(e) => setProfileData({ ...profileData, whatAreYouLookingForInCoFounder: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Looking For Co-Founder With Specific Idea</label>
        <select
          name="lookingForCoFounderWithSpecificIdea"
          value={profileData.lookingForCoFounderWithSpecificIdea}
          onChange={(e) => setProfileData({ ...profileData, lookingForCoFounderWithSpecificIdea: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Technical Or Non-Technical Profiles</label>
        <select
          name="technicalOrNonTechnicalProfiles"
          value={profileData.technicalOrNonTechnicalProfiles}
          onChange={(e) => setProfileData({ ...profileData, technicalOrNonTechnicalProfiles: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="technical">Technical</option>
          <option value="non-technical">Non-Technical</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Match Up Timing</label>
        <select
          name="matchUpTiming"
          value={profileData.matchUpTiming}
          onChange={(e) => setProfileData({ ...profileData, matchUpTiming: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="now">Now</option>
          <option value="later">Later</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Location Preference</label>
        <input
          type="text"
          name="locationPreference"
          placeholder="E.g., New York, NY"
          value={profileData.locationPreference}
          onChange={(e) => setProfileData({ ...profileData, locationPreference: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Match Candidate Who Share Your Interest</label>
        <select
          name="matchCandidateWhoShareYourInterest"
          value={profileData.matchCandidateWhoShareYourInterest}
          onChange={(e) => setProfileData({ ...profileData, matchCandidateWhoShareYourInterest: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300">Alert For New Matches</label>
        <select
          name="alertForNewMatches"
          value={profileData.alertForNewMatches}
          onChange={(e) => setProfileData({ ...profileData, alertForNewMatches: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {/* <button onClick={()=>{setShowForm(!showForm)}}>Cancel</button> */}
      {/* <button onClick={()=>{setShowForm(!showForm)}}>Save</button> */}

    </div>
  );
};

export default MyProfile;
