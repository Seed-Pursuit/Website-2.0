import React from 'react';
import { Link } from 'react-router-dom';

const StartupProfile = ({ profile }) => {
  return (
    <div className="px-10 py-20">
      <div>
        <p className="text-4xl text-left text-black">{profile.name}</p>
        <hr className="w-64 h-2 bg-[#84DCCF] my-3" />
        <p className="text-lg text-left text-black mb-4">{profile.description}</p>
        <div className="flex flex-wrap mb-2">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 bg-[#84DCCF] text-white text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500">Location: {profile.location}</p>
        <p className="text-gray-500">Founder: {profile.founder}</p>
        <p className="text-gray-500">Employees: {profile.employees}</p>
        <a href={profile.website} className="text-red-600 hover:underline">
          Website
        </a>
        <div className="my-4">
          {/* Display investment options for investors */}
          <p className="text-lg text-left text-black mb-2">Investment Options</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            faucibus metus quis ipsum rhoncus, in bibendum nulla consectetur.
          </p>
          {/* Add an "Invest Now" button or link */}
          <Link to={`/invest/${profile.id}`} className="text-red-600 hover:underline">
            Invest Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;
