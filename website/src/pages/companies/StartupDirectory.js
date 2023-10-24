import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/Right Arrow.png';

const StartupDirectory = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterSelection = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

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
            <div>
                <div className="relative w-80 h-[550px] rounded-lg bg-[#f5f5ee] border border-black p-4">
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
    );
};

const checkboxOptions = [
    { id: 'topByRevenue', label: 'Top companies by revenue' },
    { id: 'topByValuation', label: 'Top companies by valuation' },
    { id: 'isHiring', label: 'Is hiring' },
    { id: 'nonProfit', label: 'Non Profit' },
    { id: 'womenFounded', label: 'Women Founded' },
    // Add more filter options here
];

export default StartupDirectory;
