import { useAuth0 } from "@auth0/auth0-react";
import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { app } from "../../db/Firebase";
import Sidebar from "../find_a_co_founder/Sidebar";
import { FiLinkedin, FiMail, FiMap, FiMapPin, FiUser } from "react-icons/fi";
import { FaBirthdayCake, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

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
                        console.log("No data available");
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchProfileData();
        }
    }, [db, isAuthenticated, user.sub]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="p-10 space-y-6 font-nunito">
                <h1 className="text-3xl font-bold text-center">Profile Preview</h1>
                {profileData ? (
                    <div className="p-10">
                        <div className="py-5">
                            <div className="flex justify-left bg-white p-6 rounded-lg shadow-md ">
                                <div className="text-center p-5 items-center">
                                    <img
                                        src={user.picture}
                                        alt=""
                                        className="w-40 object-cover rounded-full"
                                    />
                                </div>
                                <div className="px-20 text-center">
                                    <h2 className="text-[30px] py-3">
                                        {profileData.basic.firstName} {profileData.basic.lastName}
                                    </h2>
                                    <div className=" px-20">
                                        <div className="px-5">
                                            <p className="text-gray-600 flex text-[20px] ">
                                                <FiMapPin className="text-red-600" />
                                                {profileData.basic.location}
                                            </p>
                                        </div>
                                        <div className="px-5">
                                            <p className="text-gray-600 flex text-[20px]">
                                                <FaBirthdayCake className="text-red-600" />
                                                {profileData.basic.birthdate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="text-[20px] mt-6 bg-white p-6 rounded-lg shadow-md">
                                <strong>About Me</strong>
                                <hr/>
                                <p>{profileData.basic.bio}</p>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="bg-white p-6 rounded-lg shadow-md py-10">
                                <div className="flex">
                                    <p className="px-5 flex text-[20px]">
                                        <FiUser className="text-[30px] text-blue-700" />
                                        <p>{profileData.basic.pronouns}</p>
                                    </p>
                                    <p className="px-5 flex text-[20px]">
                                        [{profileData.basic.gender}]
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="px-5 text-[17px]">
                                        <a className="flex" href="mailto:{profileData.basic.email}">
                                            <FiMail className="text-[30px] text-blue-700" />
                                            <p>{profileData.basic.email}</p>
                                        </a>
                                    </p>
                                    <p className="px-5 text-[17px]">
                                        <a className="flex" href={profileData.basic.linkedin}>
                                            <FaLinkedin className="text-[30px] text-blue-700" />
                                            <p>{profileData.basic.linkedin}</p>
                                        </a>
                                    </p>
                                </div>
                                <div className="px-5">
                                    <a href={profileData.basic.schedulingUrl}><button className="px-3 bg-blue-500 text-[25px] lg:rounded"><p className="text-white">Book a meeeting</p></button></a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-[20px]">
                            <div>
                                <p>
                                    <strong>Impressive Accomplishment:</strong>{" "}
                                    {profileData.basic.impressiveAccomplishment}
                                </p>
                                <p>
                                    <strong>Employment:</strong> {profileData.basic.employment}
                                </p>
                                <p>
                                    <strong>Education:</strong> {profileData.basic.education}
                                </p>
                                <p>
                                    <strong>Is Programmer:</strong>{" "}
                                    {profileData.basic.isProgrammer}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">Additional Information</h2>
                            <p>{profileData.basic.additionalInfo}</p>
                        </div>
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-md text-[20px]">
                            <p>
                                <strong>Startup Idea:</strong> {profileData.basic.startupIdea}
                            </p>
                            <p>
                                <strong>Ideas Interested:</strong>{" "}
                                {profileData.basic.ideasInterested}
                            </p>
                            <p>
                                <strong>Already Have Co-Founder:</strong>{" "}
                                {profileData.basic.alreadyHaveCoFounder}
                            </p>
                            <p>
                                <strong>Areas Willing To Take Responsibility:</strong>{" "}
                                {profileData.basic.areasWillingToTakeResponsibility}
                            </p>
                            <p>
                                <strong>Topics And Industries Interested:</strong>{" "}
                                {profileData.basic.topicsAndIndustriesInterested}
                            </p>
                            <p>
                                <strong>Expectations For Splitting Equality:</strong>{" "}
                                {profileData.basic.ExpectationsForSplittingEquality}
                            </p>
                            <p>
                                <strong>Hobbies And Interest:</strong>{" "}
                                {profileData.basic.hobbiesAndInterest}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Loading profile data...</p>
                )}
            </div>
        </div>
    );
};

export default PreviewProfile;
