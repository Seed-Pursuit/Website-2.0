import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/Right Arrow.png';
const StartupDirectory = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [companyProfiles, setCompanyProfiles] = useState([
        {
            id: 1,
            name: 'Tech Innovators Inc.',
            tags: ['Technology', 'Startup', 'Innovation'],
            description: 'We are pioneering the next generation of technology solutions.',
            location: 'San Francisco, CA',
            founder: 'Alice Johnson',
            employees: 30,
            website: 'https://www.techinnovators.com',
            image: 'https://source.unsplash.com/200x150/?logo/1',
        },
        {
            id: 2,
            name: 'HealthTech Solutions',
            tags: ['Healthcare', 'Innovation', 'Medical'],
            description: 'Revolutionizing healthcare with cutting-edge innovations.',
            location: 'New York, NY',
            founder: 'Bob Anderson',
            employees: 60,
            website: 'https://www.healthtechsolutions.com',
            image: 'https://source.unsplash.com/200x150/?logo/2',
        },
        {
            id: 3,
            name: 'FinEdge Technologies',
            tags: ['Finance', 'Fintech', 'Investment'],
            description: 'Empowering investors with smart financial solutions.',
            location: 'Chicago, IL',
            founder: 'Eva Smith',
            employees: 45,
            website: 'https://www.finedgetech.com',
            image: 'https://source.unsplash.com/200x150/?logo/3',
        },
        {
            id: 4,
            name: 'EduTech Visionaries',
            tags: ['Education', 'EdTech', 'Innovation'],
            description: 'Transforming education through digital learning platforms.',
            location: 'Los Angeles, CA',
            founder: 'David Wilson',
            employees: 25,
            website: 'https://www.edutechvisionaries.com',
            image: 'https://source.unsplash.com/200x150/?logo/4',
        },
        {
            id: 5,
            name: 'GreenScape Innovations',
            tags: ['Environment', 'Sustainability', 'GreenTech'],
            description: 'Leading the way in sustainable technology and practices.',
            location: 'Seattle, WA',
            founder: 'Grace Turner',
            employees: 40,
            website: 'https://www.greenscapeinnovations.com',
            image: 'https://source.unsplash.com/200x150/?logo/5',
        },
        {
            id: 6,
            name: 'TravelGenius',
            tags: ['Travel', 'Tourism', 'Adventures'],
            description: 'Explore the world with our travel planning expertise.',
            location: 'Miami, FL',
            founder: 'Chris Martinez',
            employees: 20,
            website: 'https://www.travelgenius.com',
            image: 'https://source.unsplash.com/200x150/?logo/6',
        },
        {
            id: 7,
            name: 'DataDive Analytics',
            tags: ['Data Science', 'Analytics', 'Big Data'],
            description: 'Uncover valuable insights with our data analytics solutions.',
            location: 'Austin, TX',
            founder: 'Olivia Davis',
            employees: 55,
            website: 'https://www.datadiveanalytics.com',
            image: 'https://source.unsplash.com/200x150/?logo/7',
        },
        {
            id: 8,
            name: 'AeroTech Innovations',
            tags: ['Aviation', 'Aerospace', 'Technology'],
            description: 'Pushing the boundaries of aerospace technology.',
            location: 'Los Angeles, CA',
            founder: 'Michael Adams',
            employees: 75,
            website: 'https://www.aerotechinnovations.com',
            image: 'https://source.unsplash.com/200x150/?logo/8',
        },
        {
            id: 9,
            name: 'EcoSolutions Inc.',
            tags: ['Environment', 'Eco-Friendly', 'Sustainability'],
            description: 'Creating a sustainable and eco-friendly future for all.',
            location: 'Portland, OR',
            founder: 'Emma Green',
            employees: 35,
            website: 'https://www.ecosolutions.com',
            image: 'https://source.unsplash.com/200x150/?logo/9',
        },
        {
            id: 10,
            name: 'FoodieTech Labs',
            tags: ['FoodTech', 'Culinary', 'Innovation'],
            description: 'Innovating the culinary world with technology.',
            location: 'San Francisco, CA',
            founder: 'Liam Baker',
            employees: 40,
            website: 'https://www.foodietechlabs.com',
            image: 'https://source.unsplash.com/200x150/?logo/10',
        },
        {
            id: 11,
            name: 'SpaceWonders Exploration',
            tags: ['Space', 'Exploration', 'Astronomy'],
            description: 'Embarking on celestial journeys and discoveries.',
            location: 'Houston, TX',
            founder: 'Sophia Turner',
            employees: 28,
            website: 'https://www.spacewondersexploration.com',
            image: 'https://source.unsplash.com/200x150/?logo/11',
        },
        {
            id: 12,
            name: 'MediConnect Health',
            tags: ['HealthTech', 'Medical', 'Telemedicine'],
            description: 'Connecting patients and healthcare professionals with telemedicine.',
            location: 'Chicago, IL',
            founder: 'Daniel Smith',
            employees: 50,
            website: 'https://www.mediconnecthealth.com',
            image: 'https://source.unsplash.com/200x150/?logo/12',
        },
        {
            id: 13,
            name: 'RoboWorks Robotics',
            tags: ['Robotics', 'Automation', 'AI'],
            description: 'Transforming industries with advanced robotics and automation.',
            location: 'Seattle, WA',
            founder: 'Alexa Brown',
            employees: 42,
            website: 'https://www.roboworksrobotics.com',
            image: 'https://source.unsplash.com/200x150/?logo/13',
        },
        {
            id: 14,
            name: 'EduPlay Learning',
            tags: ['Education', 'EdTech', 'Learning Games'],
            description: 'Making learning fun with interactive educational games.',
            location: 'Boston, MA',
            founder: 'Matthew Clark',
            employees: 32,
            website: 'https://www.eduplaylearning.com',
            image: 'https://source.unsplash.com/200x150/?logo/14',
        },
        {
            id: 15,
            name: 'SecureShield Cybersecurity',
            tags: ['Cybersecurity', 'Data Protection', 'Network Security'],
            description: 'Protecting businesses from cyber threats and data breaches.',
            location: 'San Diego, CA',
            founder: 'Sophie White',
            employees: 48,
            website: 'https://www.secureshieldcybersecurity.com',
            image: 'https://source.unsplash.com/200x150/?logo/15',
        },
        {
            id: 16,
            name: 'BioTech Innovations',
            tags: ['Biotechnology', 'Research', 'Health'],
            description: 'Advancing healthcare with groundbreaking biotech solutions.',
            location: 'Cambridge, MA',
            founder: 'William Harris',
            employees: 60,
            website: 'https://www.biotechinnovations.com',
            image: 'https://source.unsplash.com/200x150/?logo/16',
        },

    ]);

    const handleFilterSelection = (filter) => {
        const filterIndex = selectedFilters.findIndex(
            (selectedFilter) => selectedFilter.value === filter.value && selectedFilter.type === filter.type
        );

        if (filterIndex === -1) {
            setSelectedFilters([...selectedFilters, filter]);
        } else {
            const updatedFilters = [...selectedFilters];
            updatedFilters.splice(filterIndex, 1);
            setSelectedFilters(updatedFilters);
        }
    };

    const applyFilters = (profile) => {
        return selectedFilters.every((filter) => {
            if (filter.type === 'tags') {
                return filter.value === 'all' || profile.tags.includes(filter.value);
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
                                <img src={profile.image} alt='' />
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
            { label: 'Education', value: 'Education' },
            { label: 'Fintech', value: 'Fintech' },
            { label: 'Gaming', value: 'Gaming' },
            { label: 'Healthcare', value: 'Healthcare' },
            { label: 'Real Estate and Construction', value: 'Real Estate' },
            { label: 'Aviation and Space', value: 'Aviation' },
            { label: 'Government', value: 'Government' },
            { label: 'Transportation', value: 'Transportation' },
            { label: 'Travel and Tourism', value: 'Travel' },
            { label: 'Blockchain', value: 'Blockchain' },
            { label: 'Cybersecurity', value: 'Cybersecurity' },
        ]
    },
    {
        label: 'Target Customer', options: [
            { label: 'All', value: 'all' },
            { label: 'B2B', value: 'B2B' },
            { label: 'B2G', value: 'B2G' },
            { label: 'C2B', value: 'C2B' },
            { label: 'B2C', value: 'B2C' },
            { label: 'F2C', value: 'F2C' },
            { label: 'G2C', value: 'G2C' },
            { label: 'C2C', value: 'C2C' },
            { label: 'DTC', value: 'DTC' },
            { label: 'G2B', value: 'G2B' },
            { label: 'Non-Profit', value: 'Non-Profit' },
            { label: 'Co-Ops', value: 'Co-Ops' },
            { label: 'Franchise', value: 'Franchise' },
        ]
    },
    {
        label: 'Region', options: [
            { label: 'Anywhere', value: 'anywhere' },
            { label: 'Remote', value: 'Remote' },
            { label: 'Asia', value: 'Asia' },
            { label: 'Africa', value: 'Africa' },
            { label: 'America', value: 'America' },
            { label: 'Antarctica', value: 'Antarctica' },
            { label: 'Europe', value: 'Europe' },
            { label: 'Australia', value: 'Australia' },
        ]
    },
    {
        label: 'Technologies', options: [
            { label: 'All Tags', value: 'all' },
            { label: 'Analytics', value: 'Analytics' },
            { label: 'Web3', value: 'webWeb33' },
            { label: 'Games', value: 'Games' },
            { label: 'SaaS', value: 'SaaS' },
            { label: 'Robotics', value: 'Robotics' },
            { label: 'AI/ML', value: 'AI/ML' },
            { label: 'Infrastructure', value: 'Infrastructure' },
            { label: 'DevOps', value: 'DevOps' },
            { label: 'Blockchain', value: 'Blockchain' },
            { label: 'Cybersecurity', value: 'Cybersecurity' },
        ]
    },
    {
        label: 'Status', options: [
            { label: 'All States', value: 'all' },
            { label: 'Active', value: 'Active' },
            { label: 'Public', value: 'Public' },
            { label: 'Acquired', value: 'Acquired' },
            { label: 'Inactive', value: 'Inactive' },
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
