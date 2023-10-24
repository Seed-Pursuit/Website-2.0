import React from 'react';
import Image from '../../assets/image2.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='py-16'>
            <div className="bg-[#ffede1] min-h-screen flex">
                <div className='px-5 py-10'>
                    <p className="text-[90px] text-left">
                        <span className="text-[90px] text-left text-black">Why </span>
                        <br />
                        <span className="text-[90px] text-left text-[#ef626c]">Seed Pursuit?</span>
                    </p>
                    <p className="w-[444px] text-[35px] text-left text-black">
                        We provide Path to Transparent Crowdfunding Success
                    </p>
                    <div className='p-10'>
                        <Link to="/apply">
                            <div className="w-40 h-12 relative">
                                <div className="w-40 h-12 absolute left-0 top-0">
                                    <div className="w-40 h-12 absolute left-0 top-0 group transform hover:translate-y-1 transition-transform duration-300 ease-in-out">
                                        <div className="w-40 h-12 absolute left-0 top-0 rounded-full bg-[#0e1c36] border border-[#22181c] shadow-md"></div>
                                        <p className="w-40 h-12 absolute left-1 top-1 text-2xl text-[#ef626c] text-center group-hover:scale-110 transition-transform duration-300 ease-in-out">Apply</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='justify-end flex-grow'>
                    <AnimatedImage />
                </div>
            </div>
        </div>
    );
}
const AnimatedImage = () => {
    const animationStyle = {
        animation: 'upDownAnimation 4s ease-in-out infinite',
    };

    return (
        <img
            src={Image}
            alt=""
            className="w-full"
            style={animationStyle}
        />
    );
}
export default Hero;
