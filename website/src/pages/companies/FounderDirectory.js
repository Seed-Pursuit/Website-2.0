import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FounderDirectory = () => {
    const [founders, setFounders] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        school: 'All Schools',
        company: 'All Companies',
        location: 'All Locations',
    });
    const [expandedFounder, setExpandedFounder] = useState(null);

    useEffect(() => {
        fetchRandomUsers();
    }, []);

    const fetchRandomUsers = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=30');
            const data = await response.json();
            setFounders(data.results);
        } catch (error) {
            console.error('Error fetching random users:', error);
        }
    };

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters({
            ...selectedFilters,
            [filterType]: value,
        });
    };

    const toggleExpandFounder = (founder) => {
        if (expandedFounder === founder) {
            setExpandedFounder(null);
        } else {
            setExpandedFounder(founder);
        }
    };

    const filterFounders = (founder) => {
        return (
            (selectedFilters.school === 'All Schools' ||
                founder.location.school === selectedFilters.school) &&
            (selectedFilters.company === 'All Companies' ||
                founder.location.company === selectedFilters.company) &&
            (selectedFilters.location === 'All Locations' ||
                founder.location.city === selectedFilters.location)
        );
    };

    const generateRandomCompany = () => {
        const companies = [
            'Tech Innovators Inc.',
            'HealthTech Solutions',
            'FinEdge Technologies',
            'EduTech Visionaries',
            'GreenScape Innovations',
            'TravelGenius',
        ];
        return companies[Math.floor(Math.random() * companies.length)];
    };

    const uniqueSchools = ['All Schools', ...new Set(founders.map((founder) => founder.location.school))];
    const uniqueCompanies = ['All Companies', ...new Set(founders.map((founder) => founder.location.company))];
    const uniqueLocations = ['All Locations', ...new Set(founders.map((founder) => founder.location.city))];

    return (
        <div className="px-10 py-20">
            <div>
                <p className="w-[629px] text-[45px] text-left text-black">Founder Directory</p>
                <svg
                    width={691}
                    height={2}
                    viewBox="0 0 691 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path d="M0 1H691" stroke="#84DCCF" />
                </svg>
                <p className="w-[1071px] h-[141px] text-lg text-left">
                    <span className="w-[1071px] h-[141px] text-lg text-left text-black">
                        Since 2023, we've had the privilege of supporting over 900 incredible founders. Explore the
                        impressive roster of Seed Pursuit founders, organized by industry, region, and background. For
                        more in-depth information, check out our blog where we share demographic{" "}
                    </span>
                    <Link to="/blogs">
                        <span className="w-[1071px] h-[141px] text-lg text-left text-[#afcbff]">insights</span>
                    </Link>
                    <span className="w-[1071px] h-[141px] text-lg text-left text-black">.</span>
                    <br />
                </p>
            </div>
            <div className="mb-4">
                <label htmlFor="schoolFilter">Filter by School:</label>
                <select
                    id="schoolFilter"
                    onChange={(e) => handleFilterChange('school', e.target.value)}
                    value={selectedFilters.school}
                >
                    {uniqueSchools.map((school) => (
                        <option key={school} value={school}>
                            {school}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="companyFilter">Filter by Company:</label>
                <select
                    id="companyFilter"
                    onChange={(e) => handleFilterChange('company', e.target.value)}
                    value={selectedFilters.company}
                >
                    {uniqueCompanies.map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="locationFilter">Filter by Location:</label>
                <select
                    id="locationFilter"
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    value={selectedFilters.location}
                >
                    {uniqueLocations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap">
                {founders.filter(filterFounders).map((founder, index) => (
                    <div key={index} className="w-1/4 p-4">
                        <div className="bg-white rounded-lg border p-4 cursor-pointer" onClick={() => toggleExpandFounder(founder)}>
                            <img
                                src={founder.picture.large}
                                alt={`${founder.name.first} ${founder.name.last}`}
                                className="w-24 h-24 rounded-full mx-auto mb-2"
                            />
                            <h2 className="text-xl text-black">
                                {founder.name.first} {founder.name.last}
                            </h2>
                            <p className="text-gray-500">{founder.location.school}</p>
                            <p className="text-gray-500">{founder.location.company}</p>
                            <p className="text-gray-500">{founder.location.city}</p>
                            {expandedFounder === founder && (
                                <div className="mt-4">
                                    <p className="text-black">Additional Details:</p>
                                    <p className="text-gray-500">
                                        <strong>Company:</strong> {generateRandomCompany()}
                                    </p>
                                    <p className="text-gray-500">
                                        <strong>Email:</strong> {founder.email}
                                    </p>
                                    <p className="text-gray-500">
                                        <strong>Phone:</strong> {founder.phone}
                                    </p>
                                    <p className="text-gray-500">
                                        <strong>Location:</strong> {founder.location.city}, {founder.location.state}, {founder.location.country}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FounderDirectory;
