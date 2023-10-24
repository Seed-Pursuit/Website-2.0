import React from "react";
import EventCard from "./EventCard";

const Apply = () => {
  const events = [
    {
      id: 1,
      title: "Startup Showdown",
      description: "Startup Showdown is where the entrepreneurial spirit meets competition. Startups from various industries come together to pitch their game-changing ideas, seeking not just investment but the chance to make their mark in the business world.",
      date: "Event Date 1",
      venue: "Event Venue 1",
      imageUrl: "https://source.unsplash.com/300x200/?startup",
    },
    {
      id: 2,
      title: "Pitch Perfect",
      description: "In Pitch Perfect, founders fine-tune their presentation skills and vie for top honors. It's not just about the pitch; it's about conveying your passion and expertise to our panel of experienced judges.",
      date: "Event Date 2",
      venue: "Event Venue 2",
      imageUrl: "https://source.unsplash.com/300x200/?pitch",
    },
    {
      id: 3,
      title: "Investor’s Choice",
      description: "In the Investor's Choice event, you're not just pitching to a panel; you're pitching to potential investors eager to support the next big thing. It's a chance to secure funding and expertise to accelerate your growth.",
      date: "Event Date 3",
      venue: "Event Venue 3",
      imageUrl: "https://source.unsplash.com/300x200/?investment",
    },
    {
      id: 4,
      title: "Innovation Ignite",
      description: "Ignite innovation with this competition that celebrates groundbreaking ideas. Showcase your startup's potential and spark interest from investors and industry leaders.",
      date: "Event Date 4",
      venue: "Event Venue 4",
      imageUrl: "https://source.unsplash.com/300x200/?innovation",
    },
    {
      id: 5,
      title: "Investor's Oasis",
      description: "The Investor's Oasis is where startups and investors come together in a harmonious blend. Founders have the unique chance to pitch their business concepts and form connections with investors eager to explore new opportunities.",
      date: "Event Date 5",
      venue: "Event Venue 5",
      imageUrl: "https://source.unsplash.com/300x200/?oasis",
    },
    {
      id: 6,
      title: "Startup Unleashed",
      description: "In Startup Unleashed, we set startups free to demonstrate their potential. It's an event where your startup can break free from the constraints and captivate the audience with your vision.",
      date: "Event Date 6",
      venue: "Event Venue 6",
      imageUrl: "https://source.unsplash.com/300x200/?unleashed",
    },
  ];


  return (
    <div>
      <div className="p-20">
        <p className="w-[1014px] text-[45px] text-left text-black">
          Apply to Seed Pursuit Showcase
        </p>
        <svg
          width={724}
          height={8}
          viewBox="0 0 724 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 7L724 1.03296" stroke="#84DCCF" strokeWidth={2} />
        </svg>
        <p className="w-[1138px] text-sm text-left text-black">
          Seed Pursuit hosts a series of dynamic startup showcase events
          designed to spotlight the most innovative business ideas and
          entrepreneurial ventures. Each event is a unique opportunity for
          founders to present their vision and gain valuable insights, funding,
          and recognition. Explore what these events have to offer.
        </p>
      </div>
      <div className="px-10">
        <div className="grid grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div className="p-10">
        <div className="">
          <p className="left-[68px] text-[45px] text-left text-[#04033f]">
            Why Participate?
          </p>
        </div>
        <div className="">
          <p className="left-[68px] text-lg font-bold text-left">
            <span className="text-lg font-bold text-left text-[#ef626c]">
              Visibility
            </span>
            <span className="text-lg font-bold text-left text-black">
              : Gain exposure and recognition within the startup and investor
              community.
            </span>
            <br />
            <span className=" text-lg font-bold text-left text-[#ef626c]">
              Funding Opportunities
            </span>
            <span className="text-lg font-bold text-left text-black">
              : Secure potential investment from a pool of interested investors.
            </span>
            <br />
            <span className="text-lg font-bold text-left text-[#ef626c]">
              Networking
            </span>
            <span className="text-lg font-bold text-left text-black">
              : Connect with like-minded entrepreneurs, mentors, and industry
              experts.
            </span>
            <br />
            <span className="text-lg font-bold text-left text-[#ef626c]">
              Feedback and Guidance
            </span>
            <span className="text-lg font-bold text-left text-black">
              : Receive invaluable feedback and guidance from seasoned judges and
              mentors.
            </span>
            <br />
            <span className="text-lg font-bold text-left text-[#ef626c]">
              Recognition
            </span>
            <span className="text-lg font-bold text-left text-black">
              : Win accolades and awards to boost your startup's credibility.
            </span>
          </p>
        </div>
      </div>
      <div className="px-10">
        <p className="text-[45px] text-left text-[#04033f]">
          Beyond the event
        </p>
        <p className="text-lg font-bold text-left text-[#af70c3]">
          The impact of participating in a Seed Pursuit showcase event doesn't end with the competition.
          We continue to support founders with guidance, introductions to potential partners, and
          opportunities for further funding. Join us at the forefront of innovation, where your startup
          journey can truly take off.
        </p>
      </div>
      <div className="p-10">
        <p className="text-[45px] text-left text-[#04033f]">
          What to expect?
        </p>
        <p className="text-lg font-bold text-left">
          <span className="text-lg font-bold text-left text-[#fb7a5a]">
            High Energy
          </span>
          <span className="text-lg font-bold text-left text-[#22181c]">
            : Our events are known for their high-energy atmosphere, driving motivation and creativity.
          </span>
          <br />
          <span className="text-lg font-bold text-left text-[#fb7a5a]">
            Expert Panel
          </span>
          <span className="text-lg font-bold text-left text-[#22181c]">
            : Pitch to a panel of experienced judges, mentors, and industry leaders.
          </span>
          <br />
          <span className="text-lg font-bold text-left text-[#fb7a5a]">
            Funding Opportunities
          </span>
          <span className="text-lg font-bold text-left text-[#22181c]">
            : Attract potential investors interested in backing the next big idea.
          </span>
          <br />
          <span className="text-lg font-bold text-left text-[#fb7a5a]">
            Networking
          </span>
          <span className="text-lg font-bold text-left text-[#22181c]">
            : Forge valuable connections with fellow founders and industry experts.
          </span>
          <br />
          <span className="text-lg font-bold text-left text-[#fb7a5a]">
            Feedback and Mentorship
          </span>
          <span className="text-lg font-bold text-left text-[#22181c]">
            : Receive feedback that can shape your startup's future and guidance to overcome challenges.
          </span>
          <br />
          <span className="text-lg font-bold text-left text-[#fb7a5a]">
            Recognition
          </span>
          <span className="text-lg font-bold text-left text-[#22181c]">
            : Win recognition and awards to enhance your startup's reputation
          </span>
        </p>
      </div>
      <p className="p-10 text-[35px] text-center text-red-800">
        If you have any questions or need further details, don't hesitate to reach out via email. Seed
        Pursuit is here to help you succeed on your entrepreneurial journey.
      </p>
    </div>
  );
};

export default Apply;
