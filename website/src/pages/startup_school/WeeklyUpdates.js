import React from 'react';
import Sidebar from '../find_a_co_founder/Sidebar';
import { Link } from 'react-router-dom';

const WeeklyUpdates = () => {

  return (
    <div className='flex'>
      <Sidebar />
      <div className="p-20 text-center">
        <h1 className='text-[30px] text-red-400'>Weekly Updates</h1>
        Weekly updates are great for keeping track of your progress. To submit a weekly update, you need an active company. If you are actively working on an idea, you can switch to the "active founder" track and create a company by going
        <Link to="../track" className='text-blue-300'> here.</Link>
      </div>
    </div>
  );
};

export default WeeklyUpdates;
