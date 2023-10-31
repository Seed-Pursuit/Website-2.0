import React from 'react';

const Hero1 = () => {
  return (
    <div className="flex justify-center items-center space-x-5 py-10 px-3">
      {/* Card 1 */}
      <div className="relative h-100 rounded-lg bg-[#ffede1] shadow-md text-center p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
        <p className="text-4xl text-[#ef626c] font-semibold mb-4">
          Top companies
        </p>
        <p className="text-lg text-black">
          Explore a curated list of top-performing companies ranked by revenue, providing valuable insights
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative h-100 rounded-lg bg-[#ffede1] shadow-md text-center p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
        <p className="text-4xl text-[#ef626c] font-semibold mb-4">
          SP Library
        </p>
        <p className="text-lg text-black">
          A digital repository of resources, research, and knowledge to support your business journey
        </p>
      </div>

      {/* Card 3 */}
      <div className="relative h-100 rounded-lg bg-[#ffede1] shadow-md text-center p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
        <p className="text-4xl text-[#ef626c] font-semibold mb-4">
          The Standard Deal
        </p>
        <p className="text-lg text-black">
          Your go-to source for industry-standard agreements, making business negotiations seamless
        </p>
      </div>
    </div>
  );
}

export default Hero1;
