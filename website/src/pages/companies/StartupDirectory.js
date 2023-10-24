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
        },
        {
            id: 2,
            name: 'Company B',
            tags: ['Healthcare', 'Innovation', 'Medical'],
            description: 'Company B is a healthcare company focused on medical innovations.',
        },
        {
            id: 3,
            name: 'Company C',
            tags: ['Finance', 'Fintech', 'Investment'],
            description: 'Company C is a fintech company offering investment solutions.',
        },
    ]);

    const handleFilterSelection = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    const filteredProfiles = companyProfiles.filter((profile) => {
        // If no filters are selected, show all profiles
        if (selectedFilters.length === 0) return true;

        // Check if the profile has at least one of the selected tags
        return profile.tags.some((tag) => selectedFilters.includes(tag));
    });

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
            <button className="rounded-lg bg-[#ffede1] hover:bg-[#f32e7d] hover:text-white p-2 focus:outline-none flex items-center mb-4">
                <p className="text-lg text-left text-[#f32e7d] flex items-center">
                    Woman Founded companies
                    <img src={RightArrow} alt="" className="ml-2" />
                </p>
            </button>
            <div className="flex">
                <div className="w-3/4 pr-4">
                    {filteredProfiles.map((profile) => (
                        <div key={profile.id} className="mb-4 bg-white rounded-lg border p-4">
                            <h2 className="text-xl text-black">{profile.name}</h2>
                            <p className="text-gray-500">{profile.description}</p>
                            <div className="flex flex-wrap mt-2">
                                {profile.tags.map((tag) => (
                                    <span key={tag} className="mr-2 bg-[#84DCCF] text-white text-sm px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/4 relative">
                    <div className="w-80 h-[550px] rounded-lg bg-[#f5f5ee] border border-black p-4">
                        {checkboxOptions.map((option) => (
                            <div key={option.id} className="mb-4">
                                <input
                                    type="checkbox"
                                    id={option.id}
                                    className="hidden"
                                    checked={selectedFilters.includes(option.id)}
                                    onChange={() => handleFilterSelection(option.id)}
                                />
                                <label htmlFor={option.id} className="cursor-pointer flex items-center gap-2 text-lg text-left text-black select-none">
                                    <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                                        {selectedFilters.includes(option.id) && (
                                            <div className="w-2 h-2 bg-[#84DCCF] rounded-full"></div>
                                        )}
                                    </div>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                        <hr className="border-t border-gray-300 mb-4" />
                        <div className="absolute left-4 bottom-4 text-lg text-left text-[#fba145]">
                            See more with more stuff
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const checkboxOptions = [
    { id: 'Technology', label: 'Technology' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'Finance', label: 'Finance' },
    { id: 'Startup', label: 'Startup' },
    { id: 'Innovation', label: 'Innovation' },
    { id: 'Medical', label: 'Medical' },
    { id: 'Fintech', label: 'Fintech' },
    { id: 'Investment', label: 'Investment' },
    // Add more filter options here
];

export default StartupDirectory;
