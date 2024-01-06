import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../find_a_co_founder/Sidebar';
import { useAuth0 } from '@auth0/auth0-react';

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='py-20'>
      <h1 className="text-2xl font-semibold mb-4">Welcome, {user.name}!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for being part of Seed Pursuit. Explore and grow with our diverse platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Seed Pursuit */}
              <div className="p-6 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600">
                <h2 className="text-xl font-semibold mb-2">Seed Pursuit</h2>
                <p className="text-sm">Explore startups and create your own journey.</p>
                <a target='_blank' href="https://seedpursuit.vercel.app/" className="text-sm mt-4 underline">
                  Go to Seed Pursuit
                </a>
              </div>

              {/* Pursuit Gram */}
              <div className="p-6 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600">
                <h2 className="text-xl font-semibold mb-2">Pursuit Gram</h2>
                <p className="text-sm">Share updates, achievements, and connect with the community.</p>
                <a target='_blank' href="http://localhost:5173/" className="text-sm mt-4 underline">
                  Go to Pursuit Gram
                </a>
              </div>

              {/* Pursuit Coin */}
              <div className="p-6 bg-purple-500 text-white rounded-md cursor-pointer hover:bg-purple-600">
                <h2 className="text-xl font-semibold mb-2">Pursuit Coin</h2>
                <p className="text-sm">Support startups by participating in crowdfunding campaigns.</p>
                <a  target='_blank' href="http://localhost:3000/" className="text-sm mt-4 underline">
                  Go to Pursuit Coin
                </a>
              </div>
            </div>

        {/* <div className="bg-gray-100 p-4">
          <h1 className="text-3xl font-bold mb-4">Seed Pursuit Matching Dashboard</h1>

          <div className='flex p-4'>
            <div className='border-4 mr-2 border-orange-500 min-w-[400px] p-4 text-center'>
              <div className="flex space-x-4 items-center justify-center">
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
              </div>

              <div className="text-2xl mt-4 font-bold">0</div>
              <p className="text-gray-600">PENDING REQUESTS</p>
              <p className="text-gray-600">awaiting your response</p>
            </div>
            <div className='border-4 ml-2 border-orange-500 min-w-[400px] p-4 text-center'>
              <div className="flex space-x-4 items-center mt-4 justify-center" >
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">UNREAD MESSAGE</p>
              <p className="text-gray-600">awaiting your response</p>
            </div>
          </div>


          <p className="leading-none hover:leading-loose">
          </p>

          <p className="text-2xl mt-4 font-bold">
            7115 founders in your queue meet your requirements!
          </p>
          <p className="text-gray-600">You have 0 saved profile awaiting an invite!</p>

          <div className="flex space-x-4 items-center mt-4">
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
          </div>

          <p className="text-2xl font-bold">You have 0 matches that you haven't met yet.</p>
          <p className="text-gray-600">
            Keep the search moving fast! Most successful teams set up an initial
            meeting within a week of matching.
          </p>

          <h2 className="text-xl font-bold mt-4">How it Works</h2>
          <p>
            When you go to the candidates page, you will be shown one profile at a
            time. If you choose to send a message request to someone, they will
            receive an email with your profile. If they accept your request, we'll
            match the two of you! To ensure that founders have a good experience on
            this platform, you are limited to sending 20 invites per week.
          </p>

          <h2 className="text-xl font-bold mt-4">Your Matches</h2>
          <p>
            You have 0 active matches!
          </p>

          <h2 className="text-xl font-bold mt-4">Your Filters</h2>
          <p>You haven't set any filters or preferences.</p>

          <p className="text-gray-600">
            Community trust is very important to us. If anyone harasses you, uses
            the co-founder matching platform to sell services or do anything other
            than find a co-founder, or contacts you without consent outside of
            Startup School, please report it to us.
          </p>

          <p className="text-gray-600">
            We're always trying to improve your experience. If you have any
            feedback, let us know!
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
