import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FiHome, FiUsers, FiMail, FiBook, FiUser, FiSettings, FiHelpCircle, FiLogOut, FiUserCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const { user, isAuthenticated, logout } = useAuth0();

    const sidebarVariants = {
        hidden: { x: -200 },
        visible: { x: 10, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const handleLogout = () => {
        logout(); 
    };

    return (
        <div className='py-20'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={sidebarVariants}
                className="sidebar w-64  text-black flex flex-col items-center justify-between "
            >
                <div className="user-profile text-center ">
                    {isAuthenticated &&
                        <>
                            <img
                                src={user.picture}
                                alt="User Profile"
                                className="w-12 h-12 rounded-full mb-2"
                            />
                            <p className="text-lg">{user.name}</p>
                        </>
                    }
                </div>
                <div className='border-r border-gray-300'>
                    <ul className="menu mt-4 px-10">
                        <li className="my-2">
                            <Link to="/dashboard" className="flex items-center">
                                <FiHome className="mr-2" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link to="/discover-profiles" className="flex items-center">
                                <FiUsers className="mr-2" />
                                Discover Profiles
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link to="/inbox" className="flex items-center">
                                <FiMail className="mr-2" />
                                Inbox
                            </Link>
                        </li>
                        {/* <li className="my-2">
                            <Link to="/read-the-guide" className="flex items-center">
                                <FiBook className="mr-2" />
                                Read the Guide
                            </Link>
                        </li> */}
                        <li className="my-2">
                            Curriculum
                            <ul className="ml-4">
                                <li className="my-2">
                                    <Link to="/course-overview" className="flex items-center">
                                        Course Overview
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/curriculum" className="flex items-center">
                                        Curriculum
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/weekly-updates" className="flex items-center">
                                        Weekly Updates
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link to="/sp-library" className="flex items-center">
                                        SP Library
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="my-2">
                            <Link to="/my-profile" className="flex items-center">
                                <FiUser className="mr-2" />
                                My Profile
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link to="/preview-profile" className="flex items-center">
                                <FiUserCheck className="mr-2" />
                                Preview Profile
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link to="/settings" className="flex items-center">
                                <FiSettings className="mr-2" />
                                Settings
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link to="/help" className="flex items-center">
                                <FiHelpCircle className="mr-2" />
                                Help
                            </Link>
                        </li>
                        <li className="my-2">
                            <button
                                onClick={handleLogout}
                                className="flex items-center"
                            >
                                <FiLogOut className="mr-2" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
