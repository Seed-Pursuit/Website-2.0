import { useAuth0 } from '@auth0/auth0-react';
import { get, getDatabase, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import Sidebar from '../find_a_co_founder/Sidebar';

const PreviewProfile = () => {
    const db = getDatabase(app);
    const { user, isAuthenticated } = useAuth0(); 
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        if (isAuthenticated) { 
            const fetchProfileData = async () => {
                const userRef = ref(db, `profiles/${user.sub}`);
                try {
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        setProfileData(snapshot.val());
                    } else {
                        console.log('No data available');
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchProfileData();
        }
    }, [db, isAuthenticated, user.sub]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="p-10 space-y-4">
                <h1 className="text-3xl font-bold">Preview Profile</h1>
                {profileData ? (
                    <div className=''>
                        <h2 className="text-2xl font-semibold text-center">Profile Preview</h2>
                        <img src={user.picture} alt=""/>
                        <p>First Name: {profileData.basic.firstName}</p>
                        <p>Last Name: {profileData.basic.lastName}</p>
                        <p>Email: {profileData.basic.email}</p>
                        <p>Pronouns: {profileData.basic.pronouns}</p>
                        <p>Bio: {profileData.basic.bio}</p>
                        <p>Profile Image: {profileData.basic.profileImage}</p>
                        <p>LinkedIn: {profileData.basic.linkedin}</p>
                        <p>Location: {profileData.basic.location}</p>
                        <p>Impressive Accomplishment: {profileData.basic.impressiveAccomplishment}</p>
                        <p>Employment: {profileData.basic.employment}</p>
                        <p>Education: {profileData.basic.education}</p>
                        <p>Gender: {profileData.basic.gender}</p>
                        <p>Birthdate: {profileData.basic.birthdate}</p>
                        <p>Is Programmer: {profileData.basic.isProgrammer}</p>
                        <p>Scheduling URL: {profileData.basic.schedulingUrl}</p>
                        <p>Additional Info: {profileData.basic.additionalInfo}</p>
                        <p>Video Introduction: {profileData.basic.videoIntroduction}</p>
                        <p>Additional Links: {profileData.basic.additionalLinks}</p>

                        <h2 className="text-2xl font-semibold mt-4">More Information</h2>
                        <p>Startup Idea: {profileData.basic.startupIdea}</p>
                        <p>Ideas Interested: {profileData.basic.ideasInterested}</p>
                        <p>Already Have Co-Founder: {profileData.basic.alreadyHaveCoFounder}</p>
                        <p>Areas Willing To Take Responsibility: {profileData.basic.areasWillingToTakeResponsibility}</p>
                        <p>Topics And Industries Interested: {profileData.basic.topicsAndIndustriesInterested}</p>
                        <p>Expectations For Splitting Equality: {profileData.basic.ExpectationsForSplittingEquality}</p>
                        <p>Hobbies And Interest: {profileData.basic.hobbiesAndInterest}</p>

                    </div>
                ) : (
                    <p>Loading profile data...</p>
                )}
            </div>
        </div>
    );
}

export default PreviewProfile;
