import React from "react";
import Hero from "../components/Hero";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import TopCompanies from "../assets/top-companies.png";
import Image from '../assets/Component.png';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Hero1 />
            <img src={TopCompanies} alt="" />
            <p className="text-[45px] text-center p-5">
                <span className=" text-[45px] text-center text-black">
                    "We{" "}
                </span>
                <span className=" text-[45px] text-center text-[#fb7a5a]">
                    empower visionaries
                </span>
                <span className=" text-[45px] text-center text-black">
                    {" "}
                    to create what the world needs, and our impact is the testimony."
                </span>
                <br />
            </p>
            <br />
            <Hero2 />
            {/* <img src={Image} alt=""/> */}
        </div>
    );
};

export default Homepage;
