import React, { useState, useEffect } from 'react';

const FounderDirectory = () => {
  const [founders, setFounders] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    school: 'All Schools',
    company: 'All Companies',
    location: 'All Locations',
  });

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

  const uniqueSchools = [
    'All Schools',
    ...new Set(founders.map((founder) => founder.location.school)),
  ];

  const uniqueCompanies = [
    'All Companies',
    ...new Set(founders.map((founder) => founder.location.company)),
  ];

  const uniqueLocations = [
    'All Locations',
    ...new Set(founders.map((founder) => founder.location.city)),
  ];

  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl text-left text-black">Founder Directory</h1>
      <hr className="w-64 h-2 bg-[#84DCCF] my-3" />

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
            <div className="bg-white rounded-lg border p-4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderDirectory;
