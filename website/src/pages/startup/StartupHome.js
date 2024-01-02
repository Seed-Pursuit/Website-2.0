import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import { getDatabase, ref, set, get, child, onValue } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../find_a_co_founder/Sidebar';


const StartupHome = () => {
  const [startupName, setStartupName] = useState('');
  const [startupDescription, setStartupDescription] = useState('');
  const [startupLocation, setStartupLocation] = useState('');
  const [startupWebsite, setStartupWebsite] = useState('');
  const [startupIndustry, setStartupIndustry] = useState('');
  const [startupStage, setStartupStage] = useState('');
  const [startupTeamSize, setStartupTeamSize] = useState('');
  const [startupFunding, setStartupFunding] = useState('');
  const [startupRevenue, setStartupRevenue] = useState('');
  const [startupValuation, setStartupValuation] = useState('');
  const [startupPitch, setStartupPitch] = useState('');
  const [startupVideo, setStartupVideo] = useState('');
  const [startupLogo, setStartupLogo] = useState('');
  const [startupPicture, setStartupPicture] = useState('');

  const [userStartups, setUserStartups] = useState([]);
  const database = getDatabase(app);
  const { user, isAuthenticated } = useAuth0();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique key for the startup
    const startupKey = uuidv4();

    // Save startup profile to Firebase Realtime Database with the unique key
    const startupRef = ref(database, 'startups/' + startupKey);

    try {
      if (startupName.length === 0) {
        alert("Please enter a name")
        return;
      }
      if (startupDescription.length === 0) {
        alert("Please enter a description")
        return;
      }
      if (startupLocation.length === 0) {
        alert("Please enter a location")
        return;
      }
      if (startupWebsite.length === 0) {
        alert("Please enter a website")
        return;
      }
      if (startupIndustry.length === 0) {
        alert("Please select an industry")
        return;
      }
      if (startupStage.length === 0) {
        alert("Please select a stage")
        return;
      }
      if (startupTeamSize.length === 0) {
        alert("Please select a team size")
        return;
      }
      if (startupFunding.length === 0) {
        alert("Please select a funding")
        return;
      }
      if (startupRevenue.length === 0) {
        alert("Please select a revenue")
        return;
      }
      if (startupValuation.length === 0) {
        alert("Please select a valuation")
        return;
      }
      if (startupPitch.length === 0) {
        alert("Please enter a pitch")
        return;
      }
      if (startupVideo.length === 0) {
        alert("Please enter a video")
        return;
      }
      if (startupLogo.length === 0) {
        alert("Please enter a link to logo")
        return;
      }
      if (startupPicture.length === 0) {
        alert("Please enter a link to picture")
        return;
      }


      await set(startupRef, {
        name: startupName,
        description: startupDescription,
        owner: user.name,
        ownerEmail: user.email,
        ownerPicture: user.picture,
        location: startupLocation,
        website: startupWebsite,
        industry: startupIndustry,
        stage: startupStage,
        teamSize: startupTeamSize,
        funding: startupFunding,
        revenue: startupRevenue,
        valuation: startupValuation,
        pitch: startupPitch,
        video: startupVideo,
        logo: startupLogo,
        picture: startupPicture,
      });
    } catch (err) {
      console.log(err)
    }

    // Clear form fields
    setStartupName('');
    setStartupDescription('');
    setStartupLocation('');
    setStartupWebsite('');
    setStartupIndustry('');

    // Redirect to the created startup profile using the unique key
    window.location.href = `/startup/${startupKey}`;
  };


  useEffect(() => {
    const userStartupsRef = ref(database, 'startups');
    onValue(userStartupsRef, (snapshot) => {
      const startups = [];
      snapshot.forEach((childSnapshot) => {
        const startup = childSnapshot.val();
        if (startup.ownerEmail === user.email) {
          startups.push({ key: childSnapshot.key, ...startup });
        }
      });
      setUserStartups(startups);
    });
  }, [database, user.email]);

  return (
    <>
      {
        isAuthenticated ? (
          <div className='m-0 p-0'>
          
            {/* <div className='flex flex-wrap justify-center items-center space-x-4'>
              {/* {userStartups.map((startup) => (
                <div key={startup.key} className='m-4 bg-gray-200 p-4 rounded-lg shadow-md'>
                  <h2 className='text-purple-900 text-2xl font-bold'>{startup.name}</h2>
                  <p className='text-gray-700'>{startup.description}</p>
                  <p className='text-gray-700'>{startup.location}</p>
                  <a href={`/startup/${startup.key}`} className='text-purple-500 hover:underline mt-2 block'>
                    View Profile
                  </a>
                </div>
              {/* ))} */} 
            {/* </div>  */}
            <div className='flex'>
            <Sidebar/>
           <div>
           <form onSubmit={handleFormSubmit} className='rounded bg-yellow-400 align-center items-center p-10  m-5'>
              <div className='border-1 m-2'>
                <label className='block mb-2 text-[32px] font-medium text-gray-900'>
                  Startup Name:
                  <input type="text"
                    value={startupName}
                    className='text-[32px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupName(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Startup Description:
                  <textarea
                    value={startupDescription}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupDescription(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Location:
                  <input type="text-lg"
                    value={startupLocation}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupLocation(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Website:
                  <input type="text-lg"
                    value={startupWebsite}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupWebsite(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Industry:
                  <select
                    value={startupIndustry}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupIndustry(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Aerospace">Aerospace</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Construction">Construction</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Education">Education</option>
                    <option value="Energy">Energy</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Food and Beverage">Food and Beverage</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Legal">Legal</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Media">Media</option>
                    <option value="Music">Music</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Retail">Retail</option>
                    <option value="Software">Software</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Travel">Travel</option>
                    <option value="Video Games">Video Games</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Stage:
                  <select
                    value={startupStage}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupStage(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Idea">Idea</option>
                    <option value="Prototype">Prototype</option>
                    <option value="MVP">MVP</option>
                    <option value="Product">Product</option>
                    <option value="Revenue">Revenue</option>
                    <option value="Scale">Scale</option>
                  </select>
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Team Size:
                  <select
                    value={startupTeamSize}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupTeamSize(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-500">101-500</option>
                    <option value="500+">500+</option>
                  </select>
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Funding:
                  <select
                    value={startupFunding}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    onChange={(e) => setStartupFunding(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Self-Funded">Self-Funded</option>
                    <option value="Friends and Family">Friends and Family</option>
                    <option value="Angel">Angel</option>
                    <option value="Venture Capital">Venture Capital</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Revenue:
                  <select
                    value={startupRevenue}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={(e) => setStartupRevenue(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Pre-Revenue">Pre-Revenue</option>
                    <option value="Post-Revenue">Post-Revenue</option>
                  </select>
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Valuation:
                  <select
                    value={startupValuation}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={(e) => setStartupValuation(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Pre-Seed">Pre-Seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A">Series A</option>
                    <option value="Series B">Series B</option>
                    <option value="Series C">Series C</option>
                    <option value="Series D">Series D</option>
                    <option value="Series E">Series E</option>
                    <option value="Series F">Series F</option>
                    <option value="Series G">Series G</option>
                    <option value="Series H">Series H</option>
                    <option value="Series I">Series I</option>
                    <option value="Series J">Series J</option>
                    <option value="Series K">Series K</option>
                    <option value="Series L">Series L</option>
                    <option value="Series M">Series M</option>
                    <option value="Series N">Series N</option>
                    <option value="Series O">Series O</option>
                    <option value="Series P">Series P</option>
                    <option value="Series Q">Series Q</option>
                    <option value="Series R">Series R</option>
                    <option value="Series S">Series S</option>
                    <option value="Series T">Series T</option>
                    <option value="Series U">Series U</option>
                    <option value="Series V">Series V</option>
                    <option value="Series W">Series W</option>
                    <option value="Series X">Series X</option>
                    <option value="Series Y">Series Y</option>
                    <option value="Series Z">Series Z</option>
                  </select>
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Pitch:
                  <input type="text-lg"
                    value={startupPitch}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={(e) => setStartupPitch(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Video:
                  <input type="text-lg"
                    value={startupVideo}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={(e) => setStartupVideo(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Logo:
                  <input type="text-lg"
                    value={startupLogo}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={(e) => setStartupLogo(e.target.value)} />
                </label>
              </div>
              <div className='m-2'>
                <label>
                  Picture:
                  <input type="text-lg"
                    value={startupPicture}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={(e) => setStartupPicture(e.target.value)} />
                </label>
              </div>

              <div>
                <button className='text-lg rounded bg-purple-500 p-3 m-3' type="submit">Submit</button>
              </div>
            </form>
            {userStartups.map((startup) => (
              <div key={startup.key} className='m-4 bg-gray-200 p-4 rounded-lg shadow-md'>
                <h2 className='text-purple-900 text-2xl font-bold'>{startup.name}</h2>
                <p className='text-gray-700'>{startup.description}</p>
                <p className='text-gray-700'>{startup.location}</p>
                <a target='_blank' href={`/startup/${startup.key}`} className='text-purple-500 hover:underline mt-2 block'>
                  View Startup
                </a>
              </div>
            ))}
           </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Please Login to view this page</h1>
          </div>
        )
      }
    </>
  );
};

export default StartupHome;
