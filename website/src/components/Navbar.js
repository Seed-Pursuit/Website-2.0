import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_seed_pursuit.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';
import { User, useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
    const [isPursuitCoinDropdownOpen, setIsPursuitCoinDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const openDropdown = (dropdownName) => {
        if (dropdownName !== 'about') setIsAboutDropdownOpen(false);
        if (dropdownName !== 'companies') setIsCompaniesDropdownOpen(false);
        if (dropdownName !== 'resources') setIsResourcesDropdownOpen(false);
        if (dropdownName !== 'pursuit-coin') setIsPursuitCoinDropdownOpen(false);
        if (dropdownName !== 'profile') setIsProfileDropdownOpen(false);
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
        openDropdown('about');
    };

    const toggleCompaniesDropdown = () => {
        setIsCompaniesDropdownOpen(!isCompaniesDropdownOpen);
        openDropdown('companies');
    };

    const toggleResourcesDropdown = () => {
        setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
        openDropdown('resources');
    };

    const togglePursuitCoinDropdown = () => {
        setIsPursuitCoinDropdownOpen(!isPursuitCoinDropdownOpen);
        openDropdown('pursuit-coin');
    };

    const toggleProfileDropdown = () => {
        if (!isAuthenticated) {
            loginWithPopup();
        } else {
            openDropdown('profile');
            setIsProfileDropdownOpen(!isProfileDropdownOpen);
        }
    };

    return (
        <nav className="bg-transparent fixed w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div className="text-2xl font-heading text-purple flex">
                        <Link to="/">
                            <img src={logo} alt="logo" className="w-10" />
                        </Link>
                    </div>

                    <ul className="flex space-x-6 text-gray">
                        <li>
                            <Link className="flex" onClick={toggleAboutDropdown}>
                                About
                                <FaCaretDown />
                            </Link>
                            <AnimatePresence>
                                {isAboutDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2"
                                    >
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <Link to="/what_happens_at_sp">What happens at SP</Link>
                                            </li>
                                            <li>
                                                <Link to="/apply">Apply</Link>
                                            </li>
                                            <li>
                                                <Link to="/interview_guide">SP Interview Guide</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/people">People</Link>
                                            </li>
                                            <li>
                                                <Link to="/blogs">SP Blogs</Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <Link className="flex" onClick={toggleCompaniesDropdown}>
                                Companies
                                <FaCaretDown />
                            </Link>
                            <AnimatePresence>
                                {isCompaniesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2"
                                    >
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <Link to="/startup_directory">Startup Directory</Link>
                                            </li>
                                            <li>
                                                <Link to="/top_companies">Top Companies</Link>
                                            </li>
                                            <li>
                                                <Link to="/founder_directory">Founder Directory</Link>
                                            </li>
                                            <li>
                                                <Link to="/product">Product</Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <Link to="/startup" className="flex">
                                Startup
                            </Link>
                        </li>
                        <li>
                            <Link to="/find-co-founder" className="flex">
                                Find a co-founder
                            </Link>
                        </li>
                        <li>
                            <Link to="/library" className="flex">
                                Library
                            </Link>
                        </li>
                        <li>
                            <Link className="flex" onClick={toggleResourcesDropdown}>
                                Resources
                                <FaCaretDown />
                            </Link>
                            <AnimatePresence>
                                {isResourcesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2"
                                    >
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <Link to="/startup_school">Startup School</Link>
                                            </li>
                                            <li>
                                                <Link to="/newsletter">Newsletter</Link>
                                            </li>
                                            <li>
                                                <Link to="/investor_resources">For Investors</Link>
                                            </li>
                                            <li>
                                                <Link to="/hackers_news">Hackers News</Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <Link className="flex" onClick={togglePursuitCoinDropdown}>
                                Pursuit Coin
                                <FaCaretDown />
                            </Link>
                            <AnimatePresence>
                                {isPursuitCoinDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2"
                                    >
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <Link to="https://pursuit-coin.vercel.app/">View Grants</Link>
                                            </li>
                                            <li>
                                                <Link to="/https://pursuit-coin.vercel.app/">Apply for a Grant</Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    </ul>
                    <ul className="flex space-x-6 text-gray">
                        <li>
                            <Link className="flex" onClick={toggleProfileDropdown}>
                                {isAuthenticated ? (
                                    <div style={{ position: 'relative' }}>
                                        <div className='flex'>
                                            <img
                                                src={user.picture}
                                                alt={user.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <p className='p-3'>{user.name}</p>
                                            {/* <FaCaretDown  style={{ position: 'absolute', top: '50%', right: '10', transform: 'translateY(-50%)' }} /> */}
                                        </div>
                                    </div>
                                ) : (
                                    'Login'
                                )}
                            </Link>
                            <AnimatePresence>
                                {isProfileDropdownOpen && isAuthenticated && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2"
                                        style={{ zIndex: 1000 }}
                                    >
                                        <ul className="py-2 space-y-2">
                                            <li>
                                                <Link to="/profile">Profile Settings</Link>
                                            </li>
                                            <li>
                                                <button onClick={() => logout()}>Logout</button>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    </ul>

                    <div>
                        <div className="px-4"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
