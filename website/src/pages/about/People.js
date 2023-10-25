import React from 'react';

const teamMembers = [
  {
    name: 'Vaishnavi Kale',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    name: 'Shreya Jadhav',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Shruti Shende',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Sawari Shinde',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

const TeamMember = ({ name, avatar }) => (
  <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
    <img src={avatar} alt={name} className="w-32 h-32 rounded-full mx-auto" />
    <h3 className="text-lg font-semibold text-center mt-4">{name}</h3>
  </div>
);

const People = () => {
  return (
    <div>
      <div className='p-20'>
        <p className="text-3xl md:text-5xl text-left text-black">Meet the Team</p>
        <svg
          width={724}
          height={8}
          viewBox="0 0 724 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 6.9668L724 0.999762" stroke="#84DCCF" stroke-width={2} />
        </svg>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default People;
