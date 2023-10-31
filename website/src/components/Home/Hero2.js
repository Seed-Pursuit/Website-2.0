import React from 'react';
import Image from '../../assets/image-5.png';

const Hero2 = () => {

    return (
        <div className='font-nunito'>
            <div className="flex ">
                <div className="w-1/2 pr-5">
                    <AnimatedImage />
                </div>
                <div className="w-1/2 pr-5 text-md">
                    <TextRightBlock title="Unlock Your Funding Potential">
                        Embrace the power of PursuitCoin to fund your innovative ideas
                    </TextRightBlock>
                    <TextRightBlock title="Join a Thriving Network">
                        Connect with like-minded entrepreneurs, investors, and mentors
                    </TextRightBlock>
                    <TextRightBlock title="Transparency Matters">
                        Experience real-time fund tracking and build trust with our blockchain technology
                    </TextRightBlock>
                    <TextRightBlock title="Your Success, Our Mission">
                        We're dedicated to helping you achieve your business goals
                    </TextRightBlock>
                    <TextRightBlock title="Real Stories, Real Success">
                        Read how others have leveraged Seed Pursuit for their business triumphs
                    </TextRightBlock>
                    <TextRightBlock title="Stay Informed">
                        Keep up with the latest industry trends and updates right here
                    </TextRightBlock>
                </div>
            </div>

        </div>
    );
}

const TextRightBlock = ({ title, children }) => {
    return (
        <p className="text-[28px] text-left text-[#333]">
            <span className="text-[28px] text-black">“</span>
            <span className="text-[28px] text-[#fb7a5a] font-bold">{title}</span>
            <span className="text-[28px] text-black">”:</span> {children}
        </p>
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
export default Hero2;
