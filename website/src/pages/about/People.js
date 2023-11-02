import React from 'react';

const teamMembers = [
  {
    name: 'Vaishnavi Kale',
    avatar: 'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoyLCJub3NlIjo2LCJtb3V0aCI6MywiZXllcyI6MTAsImV5ZWJyb3dzIjoxMywiZ2xhc3NlcyI6MTMsImhhaXIiOjI1LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImhhbGxvd2VlbiI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==',
  },
  {
    name: 'Shreya Jadhav',
    avatar: 'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo3LCJub3NlIjowLCJtb3V0aCI6NywiZXllcyI6NywiZXllYnJvd3MiOjEsImdsYXNzZXMiOjgsImhhaXIiOjU2LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImhhbGxvd2VlbiI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==',
  },
  {
    name: 'Shruti Shende',
    avatar: 'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjo5LCJtb3V0aCI6MTcsImV5ZXMiOjMsImV5ZWJyb3dzIjoxNCwiZ2xhc3NlcyI6MSwiaGFpciI6NTcsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==',
  },
  {
    name: 'Sawari Shinde',
    avatar: 'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxLCJub3NlIjo2LCJtb3V0aCI6MCwiZXllcyI6MiwiZXllYnJvd3MiOjMsImdsYXNzZXMiOjAsImhhaXIiOjU3LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=',
  },
];

const TeamMember = ({ name, avatar }) => (
  <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 border">
    <img src={avatar} alt={name} className="w-32 h-32 rounded-full mx-auto" />
    <h3 className="text-lg font-semibold text-center mt-4">{name}</h3>
    <hr/>
    <p className='text-sm font-semibold text-center mt-3'>Student</p>
    <p className='text-sm font-semibold text-center mt-3'>Computer Engineering</p>
    <p className='text-sm font-semibold text-center mt-3'>CCOEW '24</p>


  </div>
);

const People = () => {
  return (
    <div>
      <div className='p-20'>
        <p className="text-3xl md:text-5xl text-left text-black">Meet the Team</p>
        <svg
          width={724}
          height={8}
          viewBox="0 0 724 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 6.9668L724 0.999762" stroke="#84DCCF" stroke-width={2} />
        </svg>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default People;
