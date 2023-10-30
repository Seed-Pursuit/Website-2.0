import { useAuth0 } from '@auth0/auth0-react';
import { get, getDatabase, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import Sidebar from '../find_a_co_founder/Sidebar';
import { FiMail, FiMap, FiMapPin } from 'react-icons/fi';

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
            <div className="p-10 space-y-6">
                <h1 className="text-3xl font-bold text-center">Profile Preview</h1>
                {profileData ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-center">
                            <img
                                src={user.picture}
                                alt=""
                                className="w-20 h-20 rounded-full mb-4"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h2 className="text-xl font-semibold">Basic Information</h2>
                                <p><strong>First Name:</strong> {profileData.basic.firstName}</p>
                                <p><strong>Last Name:</strong> {profileData.basic.lastName}</p>
                                <p><strong>Email:</strong> {profileData.basic.email}</p>
                                <p><strong>Pronouns:</strong> {profileData.basic.pronouns}</p>
                                <p><strong>Location:</strong> {profileData.basic.location}</p>
                                <p><strong>LinkedIn:</strong> {profileData.basic.linkedin}</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Professional Information</h2>
                                <p><strong>Impressive Accomplishment:</strong> {profileData.basic.impressiveAccomplishment}</p>
                                <p><strong>Employment:</strong> {profileData.basic.employment}</p>
                                <p><strong>Education:</strong> {profileData.basic.education}</p>
                                <p><strong>Is Programmer:</strong> {profileData.basic.isProgrammer}</p>
                                <p><strong>Birthdate:</strong> {profileData.basic.birthdate}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">Additional Information</h2>
                            <p>{profileData.basic.additionalInfo}</p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">More Information</h2>
                            <p><strong>Startup Idea:</strong> {profileData.basic.startupIdea}</p>
                            <p><strong>Ideas Interested:</strong> {profileData.basic.ideasInterested}</p>
                            <p><strong>Already Have Co-Founder:</strong> {profileData.basic.alreadyHaveCoFounder}</p>
                            <p><strong>Areas Willing To Take Responsibility:</strong> {profileData.basic.areasWillingToTakeResponsibility}</p>
                            <p><strong>Topics And Industries Interested:</strong> {profileData.basic.topicsAndIndustriesInterested}</p>
                            <p><strong>Expectations For Splitting Equality:</strong> {profileData.basic.ExpectationsForSplittingEquality}</p>
                            <p><strong>Hobbies And Interest:</strong> {profileData.basic.hobbiesAndInterest}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Loading profile data...</p>
                )}
            </div>
        </div>
    );
}

export default PreviewProfile;
