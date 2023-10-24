import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/Right Arrow.png';

const StartupDirectory = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [companyProfiles, setCompanyProfiles] = useState([
        {
            id: 1,
            name: 'Company A',
            tags: ['Technology', 'Startup', 'Innovation'],
            description: 'Company A is a tech startup specializing in innovative solutions.',
            location: 'San Francisco, CA',
            founder: 'John Doe',
            employees: 25,
            website: 'https://www.companya.com',
        },
        {
            id: 2,
            name: 'Company B',
            tags: ['Healthcare', 'Innovation', 'Medical'],
            description: 'Company B is a healthcare company focused on medical innovations.',
            location: 'New York, NY',
            founder: 'Jane Smith',
            employees: 50,
            website: 'https://www.companyb.com',
        },
        {
            id: 3,
            name: 'Company C',
            tags: ['Finance', 'Fintech', 'Investment'],
            description: 'Company C is a fintech company offering investment solutions.',
            location: 'Chicago, IL',
            founder: 'Bob Johnson',
            employees: 30,
            website: 'https://www.companyc.com',
        },
    ]);

    const handleFilterSelection = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    const applyFilters = (profile) => {
        return selectedFilters.every((filter) => {
            if (filter.type === 'tags') {
                return profile.tags.includes(filter.value);
            }
            return true;
        });
    };

    const filteredProfiles = companyProfiles.filter(applyFilters);

    return (
        <div className="px-10 py-20">
            <div>
                <p className="text-4xl text-left text-black">Startup Directory</p>
                <hr className="w-64 h-2 bg-[#84DCCF] my-3" />
                <p className="text-lg text-left text-black mb-4">
                    Since 2023, Seed Pursuit has supported and invested in numerous innovative startups. Our directory
                    allows you to explore these startups based on various criteria such as industry, region, and company size.{" "}
                    <br />
                    Whether you're an entrepreneur looking for inspiration or an investor seeking promising ventures, our directory has something for you.{" "}
                    <br />
                    You can also find job opportunities at these startups by visiting the <Link className="text-red-600 hover:underline" to="/startup">Work at a Startup</Link> section.
                </p>
            </div>
            <div className="flex">
                <div className="w-3/4 pr-4">
                    {filteredProfiles.map((profile) => (
                        <Link key={profile.id} to={`/company/${profile.id}`} className="no-underline">
                            <div className="mb-4 bg-white rounded-lg border p-4 cursor-pointer">
                                <h2 className="text-xl text-black">{profile.name}</h2>
                                <p className="text-gray-500">{profile.description}</p>
                                <div className="flex flex-wrap mt-2">
                                    {profile.tags.map((tag) => (
                                        <span key={tag} className="mr-2 bg-[#84DCCF] text-white text-sm px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-500">Location: {profile.location}</p>
                                <p className="text-gray-500">Founder: {profile.founder}</p>
                                <p className="text-gray-500">Employees: {profile.employees}</p>
                                <a href={profile.website} className="text-red-600 hover:underline">Website</a>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="w-1/4 relative">
                    <div className="w-80  rounded-lg bg-[#f5f5ee] border border-black p-4">
                        <h3 className="text-lg text-black mb-2">Filters</h3>
                        {filterOptions.map((filterOption, index) => (
                            <div key={index}>
                                <div className="mb-2 text-lg text-black">
                                    {filterOption.label}
                                </div>
                                <div className="flex flex-wrap">
                                    {filterOption.options.map((option) => (
                                        <div key={option.value} className="mr-2 mb-2">
                                            <input
                                                type="checkbox"
                                                id={option.value}
                                                className="hidden"
                                                checked={selectedFilters.some((filter) => filter.value === option.value)}
                                                onChange={() => handleFilterSelection({ ...filterOption, value: option.value, type: 'tags' })}
                                            />
                                            <label
                                                htmlFor={option.value}
                                                className="cursor-pointer text-sm text-left text-black select-none"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const filterOptions = [
    {
        label: 'Industry', options: [
            { label: 'All Industries', value: 'all' },
            { label: 'Education', value: 'education' },
            { label: 'Fintech', value: 'fintech' },
            { label: 'Gaming', value: 'gaming' },
            { label: 'Healthcare', value: 'healthcare' },
            { label: 'Real Estate and Construction', value: 'realEstate' },
            { label: 'Aviation and Space', value: 'aviation' },
            { label: 'Government', value: 'government' },
            { label: 'Transportation', value: 'transportation' },
            { label: 'Travel and Tourism', value: 'travel' },
            // Add more options here
        ]
    },
    {
        label: 'Target Customer', options: [
            { label: 'All', value: 'all' },
            { label: 'B2B', value: 'b2b' },
            { label: 'B2G', value: 'b2g' },
            { label: 'C2B', value: 'c2b' },
            { label: 'B2C', value: 'b2c' },
            { label: 'F2C', value: 'f2c' },
            { label: 'G2C', value: 'g2c' },
            { label: 'C2C', value: 'c2c' },
            { label: 'DTC', value: 'dtc' },
            { label: 'G2B', value: 'g2b' },
            { label: 'Non-Profit', value: 'nonProfit' },
            { label: 'Co-Ops', value: 'coOps' },
            { label: 'Franchise', value: 'franchise' },
            // Add more options here
        ]
    },
    {
        label: 'Region', options: [
            { label: 'Anywhere', value: 'anywhere' },
            { label: 'Remote', value: 'remote' },
            { label: 'Asia', value: 'asia' },
            { label: 'Africa', value: 'africa' },
            { label: 'America', value: 'america' },
            { label: 'Antarctica', value: 'antarctica' },
            { label: 'Europe', value: 'europe' },
            { label: 'Australia', value: 'australia' },
            // Add more options here
        ]
    },
    {
        label: 'Technologies', options: [
            { label: 'All Tags', value: 'all' },
            { label: 'Analytics', value: 'analytics' },
            { label: 'Web3', value: 'web3' },
            { label: 'Games', value: 'games' },
            { label: 'SaaS', value: 'saas' },
            { label: 'Robotics', value: 'robotics' },
            { label: 'AI/ML', value: 'aiMl' },
            { label: 'Infrastructure', value: 'infrastructure' },
            { label: 'DevOps', value: 'devops' },
            // Add more options here
        ]
    },
    {
        label: 'Status', options: [
            { label: 'All States', value: 'all' },
            { label: 'Active', value: 'active' },
            { label: 'Public', value: 'public' },
            { label: 'Acquired', value: 'acquired' },
            { label: 'Inactive', value: 'inactive' },
            // Add more options here
        ]
    },
    {
        label: 'Company Size', options: [
            { label: 'All Sizes', value: 'all' },
            { label: '1-10', value: '1-10' },
            { label: '11-50', value: '11-50' },
            { label: '51-100', value: '51-100' },
            { label: '101-500', value: '101-500' },
            { label: '500+', value: '500+' },
            // Add more options here
        ]
    },
    {
        label: 'Revenue', options: [
            { label: 'All Revenues', value: 'all' },
            { label: '$1M+', value: 1000000 },
            { label: '$5M+', value: 5000000 },
            { label: '$10M+', value: 10000000 },
            { label: '$50M+', value: 50000000 },
            { label: '$100M+', value: 100000000 },
            // Add more options here
        ]
    },
    {
        label: 'Valuation', options: [
            { label: 'All Valuations', value: 'all' },
            { label: '$1M+', value: 1000000 },
            { label: '$5M+', value: 5000000 },
            { label: '$10M+', value: 10000000 },
            { label: '$50M+', value: 50000000 },
            { label: '$100M+', value: 100000000 },
            // Add more options here
        ]
    },
    {
        label: 'Hiring', options: [
            { label: 'Is Hiring', value: true },
            { label: 'Not Hiring', value: false },
        ]
    },
    {
        label: 'Non-Profit', options: [
            { label: 'Non-Profit', value: true },
            { label: 'For-Profit', value: false },
        ]
    },
    {
        label: 'Women Founded', options: [
            { label: 'Women Founded', value: true },
            { label: 'Not Women Founded', value: false },
        ]
    },
];

export default StartupDirectory;
