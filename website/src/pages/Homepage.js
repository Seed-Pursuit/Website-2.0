import React from "react";
import Hero from "../components/Home/Hero";
import Hero1 from "../components/Home/Hero1";
import Hero2 from "../components/Home/Hero2";
import TopCompanies from "../assets/top-companies.png";
import Image from "../assets/Component.png";
import Hero3 from "../components/Home/Hero3";
import Hero4 from "../components/Home/Hero4";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Hero1 />
      <img src={TopCompanies} alt="" />
      <p className="text-[45px] text-center p-5">
        <span className=" text-[45px] text-center text-black">"We </span>
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
      <Hero3 />
      <Hero4 />
    </div>
  );
};

export default Homepage;
