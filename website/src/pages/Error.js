import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md p-4 bg-white shadow-lg rounded-lg text-center"
      >
        <div className="text-red-600 text-4xl">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something Went Wrong</h1>
        <p className="text-gray-600 mb-4">
          We're sorry, but an error occurred while processing your request. Please try again later.
        </p>
        <p className="text-gray-600">
          You can go back to the <a href="/">home page</a> or contact our support team if the problem persists.
        </p>
      </motion.div>
    </div>
  );
};

export default Error;
