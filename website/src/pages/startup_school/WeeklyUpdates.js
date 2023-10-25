import React from 'react';
import Sidebar from '../find_a_co_founder/Sidebar';

const WeeklyUpdates = () => {
  const weeklyData = [
    {
      id: 1,
      title: 'Weekly Update 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-10-25',
    },
    {
      id: 2,
      title: 'Weekly Update 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2023-10-18',
    },
    {
      id: 3,
      title: 'Weekly Update 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      date: '2023-10-11',
    },
  ];

  return (
    <div className='flex'>
      <Sidebar />
      <div className="p-20">
        <h2 className="text-2xl font-semibold mb-4">Weekly Updates</h2>
        {weeklyData.map((update) => (
          <div key={update.id} className="mb-4">
            <h3 className="text-xl font-semibold text-red-300">{update.title}</h3>
            <p className="text-gray-600 mb-2">{update.date}</p>
            <p>{update.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyUpdates;
