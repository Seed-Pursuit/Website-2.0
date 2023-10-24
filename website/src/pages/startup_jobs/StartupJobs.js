import React from 'react';

const StartupJobs = () => {
  const startupJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechStartup Inc.',
      location: 'San Francisco, CA',
      description: 'We are looking for a talented Frontend Developer to join our innovative team...',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartupX',
      location: 'New York, NY',
      description: 'StartupX is seeking a Product Manager to lead the development of our new product line...',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'GrowthTech',
      location: 'Seattle, WA',
      description: 'GrowthTech is hiring a UX Designer who is passionate about creating exceptional user experiences...',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'InnovateTech Solutions',
      location: 'Austin, TX',
      description: 'Join our dynamic team as a Software Engineer and work on cutting-edge projects.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      company: 'Digital Ventures',
      location: 'Los Angeles, CA',
      description: 'Digital Ventures is looking for a Marketing Manager to lead our marketing efforts.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Data Analyst',
      company: 'InfoTech Innovators',
      location: 'Boston, MA',
      description: 'InfoTech Innovators is seeking a Data Analyst to analyze and interpret data.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      title: 'Mobile App Developer',
      company: 'AppWorks Co.',
      location: 'San Diego, CA',
      description: 'Join AppWorks Co. as a Mobile App Developer and create innovative mobile applications.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      title: 'Sales Associate',
      company: 'SalesPro Inc.',
      location: 'Chicago, IL',
      description: 'SalesPro Inc. is hiring a Sales Associate to drive our sales efforts.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      title: 'Content Writer',
      company: 'ContentCreators Ltd.',
      location: 'Denver, CO',
      description: 'ContentCreators Ltd. is looking for a talented Content Writer to create engaging content.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      title: 'Network Administrator',
      company: 'TechNet Solutions',
      location: 'Houston, TX',
      description: 'TechNet Solutions is seeking a Network Administrator to manage our network infrastructure.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
    <h1 className="text-3xl md:text-5xl text-left text-black p-20">Startup Jobs</h1>
    <div className="jobs p-4">
      {startupJobs.map((job) => (
        <div key={job.id} className="border border-gray-300 rounded-md p-4 mb-4 flex items-center">
          <img src={job.image} alt={job.company} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-black">{job.title}</h2>
            <p className="text-gray-500">{job.company} - {job.location}</p>
            <p className="text-black">{job.description}</p>
            <button className="bg-[#84DCCF] text-white px-4 py-2 rounded-md mt-2">
              Apply
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default StartupJobs;
