import React from 'react';

const topCompaniesData = [
  {
    id: 1,
    name: 'Tech Innovators Inc.',
    description: 'Pioneering the next generation of technology solutions.',
    image: 'https://source.unsplash.com/200x150/?tech',
  },
  {
    id: 2,
    name: 'HealthTech Solutions',
    description: 'Revolutionizing healthcare with cutting-edge innovations.',
    image: 'https://source.unsplash.com/200x150/?health',
  },
  {
    id: 3,
    name: 'FinEdge Technologies',
    description: 'Empowering investors with smart financial solutions.',
    image: 'https://source.unsplash.com/200x150/?finance',
  },
  {
    id: 4,
    name: 'EduTech Visionaries',
    description: 'Transforming education through digital learning platforms.',
    image: 'https://source.unsplash.com/200x150/?education',
  },
  {
    id: 5,
    name: 'GreenScape Innovations',
    description: 'Leading the way in sustainable technology and practices.',
    image: 'https://source.unsplash.com/200x150/?sustainability',
  },
  {
    id: 6,
    name: 'TravelGenius',
    description: 'Explore the world with our travel planning expertise.',
    image: 'https://source.unsplash.com/200x150/?travel',
  },
];

const TopCompanies = () => {
  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl text-left text-black">Top Companies</h1>
      <hr className="w-64 h-2 bg-[#84DCCF] my-3" />

      <div className="mb-4">
        <p className="text-lg text-left text-black">
          Here are some of the top companies based on our rankings:
        </p>
      </div>

      <div className="flex flex-wrap">
        {topCompaniesData.map((company) => (
          <div key={company.id} className="w-1/4 p-4">
            <div className="bg-white rounded-lg border p-4">
              <img src={company.image} alt={company.name} />
              <h2 className="text-xl text-black">{company.name}</h2>
              <p className="text-gray-500">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
