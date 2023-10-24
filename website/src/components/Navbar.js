import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_seed_pursuit.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isPursuitCoinDropdownOpen, setIsPursuitCoinDropdownOpen] = useState(false);

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsCompaniesDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
    setIsPursuitCoinDropdownOpen(false);
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
              <Link
                to="/about"
                className="flex"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={closeDropdowns}
              >
                About
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
              <Link
                to="/companies"
                className="flex"
                onMouseEnter={() => setIsCompaniesDropdownOpen(true)}
                onMouseLeave={closeDropdowns}
              >
                Companies
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
              <Link to="/startup" className="flex" onMouseEnter={closeDropdowns}>
                Startup
              </Link>
            </li>
            <li>
              <Link to="/find-co-founder" className="flex" onMouseEnter={closeDropdowns}>
                Find a co-founder
              </Link>
            </li>
            <li>
              <Link
                to="/library"
                className="flex"
                onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                onMouseLeave={closeDropdowns}
              >
                Library
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
              <Link
                to="/pursuit-coin"
                className="flex"
                onMouseEnter={() => setIsPursuitCoinDropdownOpen(true)}
                onMouseLeave={closeDropdowns}
              >
                Pursuit Coin
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
                        <Link to="/pursuit-coin-grants">View Grants</Link>
                      </li>
                      <li>
                        <Link to="/apply-grant">Apply for a Grant</Link>
                      </li>
                      {/* Add more items as needed */}
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
