import React from 'react';
import YouTube from 'react-youtube';

const videoIds = [
  'LCmiKLMk2SI', 
  'AUdi3xR-OnQ',  
  'UEngvxZ11sw',
];

const Hero4 = () => {
  const opts = {
    height: '236',
    width: '340',
    playerVars: {
      autoplay: 0,
      //to autoplay: 1
    },
  };

  return (
    <div>
      <p className="text-3xl font-bold text-center text-black mb-8">The Latest from Seed Pursuit</p>
      <div className="flex gap-8 text-center align-center justify-center">
        {videoIds.map((videoId, index) => (
          <div key={index} className="h-[272px] relative">
            <div className="w-full h-[236px] rounded-lg overflow-hidden border border-gray-300 shadow-md">
              <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
            </div>
            {/* <p className="mt-4 text-xl font-semibold text-center text-black">Video Title</p> */}
            <div className="flex justify-center mt-2">
              <p className="mr-2 text-lg text-[#fba145">10k views</p>
              <p className="text-lg text-[#fba145]">5 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero4;
