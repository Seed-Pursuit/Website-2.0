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
    const closeDropdown = (dropdownName) => {
        switch (dropdownName) {
            case 'about':
                setIsAboutDropdownOpen(false);
                break;
            case 'companies':
                setIsCompaniesDropdownOpen(false);
                break;
            case 'resources':
                setIsResourcesDropdownOpen(false);
                break;
            case 'pursuit-coin':
                setIsPursuitCoinDropdownOpen(false);
                break;
            case 'profile':
                setIsProfileDropdownOpen(false);
                break;
            default:
                break;
        }
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleCompaniesDropdown = () => {
        setIsCompaniesDropdownOpen(!isCompaniesDropdownOpen);
    };

    const toggleResourcesDropdown = () => {
        setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    };

    const togglePursuitCoinDropdown = () => {
        setIsPursuitCoinDropdownOpen(!isPursuitCoinDropdownOpen);
    };

    const toggleProfileDropdown = () => {
        if (!isAuthenticated) {
            loginWithPopup();
        } else {
            setIsProfileDropdownOpen(!isProfileDropdownOpen);
        }
    };

    return (
        <nav className="bg-white w-full">
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
                                                <Link to="/what_happens_at_sp" onClick={() => closeDropdown('about')}>What happens at SP</Link>
                                            </li>
                                            <li>
                                                <Link to="/apply" onClick={() => closeDropdown('about')}>Apply</Link>
                                            </li>
                                            <li>
                                                <Link to="/interview_guide" onClick={() => closeDropdown('about')}>SP Interview Guide</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq" onClick={() => closeDropdown('about')}>FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/people" onClick={() => closeDropdown('about')}>People</Link>
                                            </li>
                                            <li>
                                                <Link to="/blogs" onClick={() => closeDropdown('about')}>SP Blogs</Link>
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
                                                <Link to="/startup_directory" onClick={() => closeDropdown('companies')}>Startup Directory</Link>
                                            </li>
                                            <li>
                                                <Link to="/top_companies" onClick={() => closeDropdown('companies')}>Top Companies</Link>
                                            </li>
                                            <li>
                                                <Link to="/founder_directory" onClick={() => closeDropdown('companies')}>Founder Directory</Link>
                                            </li>
                                            <li>
                                                <Link to="/product" onClick={() => closeDropdown('companies')}>Product</Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <Link to="/startup" className="flex">
                                Startup Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to="/find-co-founder" className="flex">
                                Find a co-founder
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/library" className="flex">
                                Library
                            </Link>
                        </li> */}
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
                                            {/* <li>
                                                <Link to="/startup_school" onClick={() => closeDropdown('resources')}>Startup School</Link>
                                            </li> */}
                                            <li>
                                                <Link to="/newsletter" onClick={() => closeDropdown('resources')}>Newsletter</Link>
                                            </li>
                                            {/* <li>
                                                <Link to="/investor_resources" onClick={() => closeDropdown('resources')}>For Investors</Link>
                                            </li> */}
                                            <li>
                                                <Link to="/hackers_news" onClick={() => closeDropdown('resources')}>Hackers News</Link>
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
                                                <a href="http://localhost:3000/" target='_blank' alt="" rel='noreferrer' onClick={() => closeDropdown('pursuit-coin')}>View Grants</a>
                                            </li>
                                            <li>
                                                <a href="http://localhost:3000/" target='_blank' alt="" rel='noreferrer' onClick={() => closeDropdown('pursuit-coin')}>Apply for a Grant</a>
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
                                                <Link to="/profile" onClick={() => closeDropdown('profile')}>Profile Settings</Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                                                    Logout
                                                </button>
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
