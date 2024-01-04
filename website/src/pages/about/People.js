import React from 'react';

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
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 border">
          <img src='https://i.pravatar.cc/150?img=10' alt='Vaishnavi Kale' className="w-32 h-32 rounded-full mx-auto" />
          <h3 className="text-lg font-semibold text-center mt-4">Vaishnavi Kale</h3>
          <hr />
          <p className='text-sm font-semibold text-center mt-3'>Student</p>
          <p className='text-sm font-semibold text-center mt-3'>Computer Engineering</p>
          <p className='text-sm font-semibold text-center mt-3'>CCOEW '24</p>
        </div>

        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 border">
          <img src='https://i.pravatar.cc/150?img=5' alt='Shreya Jadhav' className="w-32 h-32 rounded-full mx-auto" />
          <h3 className="text-lg font-semibold text-center mt-4">Shreya Jadhav</h3>
          <hr />
          <p className='text-sm font-semibold text-center mt-3'>Student</p>
          <p className='text-sm font-semibold text-center mt-3'>Computer Engineering</p>
          <p className='text-sm font-semibold text-center mt-3'>CCOEW '24</p>
        </div>

        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 border">
          <img src='https://i.pravatar.cc/150?img=20' alt='Shruti Shende' className="w-32 h-32 rounded-full mx-auto" />
          <h3 className="text-lg font-semibold text-center mt-4">Shruti Shende</h3>
          <hr />
          <p className='text-sm font-semibold text-center mt-3'>Student</p>
          <p className='text-sm font-semibold text-center mt-3'>Computer Engineering</p>
          <p className='text-sm font-semibold text-center mt-3'>CCOEW '24</p>
        </div>

        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 border">
          <img src='https://i.pravatar.cc/150?img=26' alt='Sawari Shinde' className="w-32 h-32 rounded-full mx-auto" />
          <h3 className="text-lg font-semibold text-center mt-4">Sawari Shinde</h3>
          <hr />
          <p className='text-sm font-semibold text-center mt-3'>Student</p>
          <p className='text-sm font-semibold text-center mt-3'>Computer Engineering</p>
          <p className='text-sm font-semibold text-center mt-3'>CCOEW '24</p>
        </div>
      </div>
    </div>
  );
}

export default People;
