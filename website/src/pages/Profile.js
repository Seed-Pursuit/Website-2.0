import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isAuthenticated ? (
                <div className="p-6 rounded-lg border bg-white shadow-lg">
                    <p className="text-4xl text-black mb-4">User Profile</p>
                    <hr className="w-32 h-2 bg-[#84DCCF] mb-4" />
                    <div className="text-lg text-black mb-4">
                        <div className="mb-4">
                            <strong>Picture:</strong>
                            <img
                                src={user.picture}
                                alt="User Profile"
                                className="rounded-full mt-2"
                            />
                        </div>
                        <p>
                            <strong>Name:</strong> {user.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Nickname:</strong> {user.nickname}
                        </p>
                        <p>
                            <strong>Given Name:</strong> {user.given_name}
                        </p>
                        <p>
                            <strong>Family Name:</strong> {user.family_name}
                        </p>
                        <p>
                            <strong>Locale: </strong>{user.locale}
                        </p>
                    </div>

                </div>
            ) : (
                <div className="p-6 rounded-lg border bg-white shadow-lg">
                    <p className="text-4xl text-black mb-4">User Profile</p>
                    <hr className="w-32 h-2 bg-[#84DCCF] mb-4" />
                    <p className="text-lg text-black">
                        Please log in to view your user profile.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Profile;
