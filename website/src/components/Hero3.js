import React, { useEffect, useState } from 'react';
import Image1 from '../assets/testimonails/image1.png';
import Image2 from '../assets/testimonails/image2.png';
import Image3 from '../assets/testimonails/image3.png';
import Image4 from '../assets/testimonails/image4.png';
import Image5 from '../assets/testimonails/image5.png';




const Testimonial = ({ image, name, text }) => (
    <div className="w-[1164px] h-[137px] mb-8 relative">
        <img src={image} className="w-36 h-[137px] absolute left-[102.5px] top-[0]" alt={name} />
        <p className="absolute left-[300px] top-[58px] text-[35px] text-right text-[#fb7a5a]">{name}</p>
        <p className="w-[966px] absolute left-[301px] top-[0] text-lg text-left text-black">{text}</p>
    </div>
);

const Hero3 = () => {
    const [text, setText] = useState('');
    const originalText = "Directly from the horse’s mouth";

    useEffect(() => {
        const typingInterval = 100;
        let charIndex = 0;

        const typeText = () => {
            if (charIndex <= originalText.length) {
                setText(originalText.substring(0, charIndex));
                charIndex++;
            } else {
                charIndex = 1;
            }
        };

        const typingTimer = setInterval(typeText, typingInterval);

        return () => {
            clearInterval(typingTimer);
        };
    }, []);

    return (
        <div>
            <div className="relative mb-8">
                <p className="absolute left-[361px] text-[45px] text-right text-black">
                    {text}
                </p>
            </div>
            <div className="flex items-center justify-between py-20">
                <div className="w-1/2 pr-5 text-md">
                    <Testimonial
                        image={Image1}
                        name="Emily P., Investor"
                        text="I've never felt more confident in my investments. PursuitCoin's blockchain technology ensures my funds are used ethically. It's a win-win for entrepreneurs and backers."
                    />
                    <Testimonial
                        image={Image2}
                        name="Linda S., Mentor"
                        text="I've seen firsthand how Seed Pursuit nurtures talent. Their commitment to helping founders is truly inspiring. I'm proud to be part of this thriving community."
                    />
                    <Testimonial
                        image={Image3}
                        name="John D., Entrepreneur"
                        text="Seed Pursuit made my dream project a reality. The transparent fund tracking and access to a supportive network of investors were game-changers. Highly recommended!"
                    />
                    <Testimonial
                        image={Image4}
                        name="Alex M., Startup Enthusiast"
                        text="Seed Pursuit's library is a goldmine of knowledge! It's like having a mentor at your fingertips. A must-visit resource for every aspiring entrepreneur."
                    />
                    <Testimonial
                        image={Image5}
                        name="David R., Business Innovator"
                        text="Seed Pursuit accelerates innovation. The platform's networking capabilities have opened doors I never thought possible. It's where dreams take root and flourish."
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero3;
