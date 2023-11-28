import React, { useEffect, useState } from 'react';
import { app } from '../../db/Firebase';
import { getDatabase, ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom';

const StartupProfile = () => {
    const [startupData, setStartupData] = useState(null);
    const database = getDatabase(app);
    const { startupKey } = useParams();

    useEffect(() => {
        const fetchStartupData = async () => {
            const startupRef = ref(database, `startups/${startupKey}`);
            try {
                const snapshot = await get(startupRef);
                if (snapshot.exists()) {
                    setStartupData(snapshot.val());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching startup data:', error);
            }
        };

        fetchStartupData();
    }, [database, startupKey]);

    if (!startupData) {
        return (
            <div className='text-center'>
                <h1>Loading...</h1>
            </div>
        );
    }

    const { description, funding, industry, location, logo, name, owner, ownerEmail, ownerPicture, pitch, revenue, stage, teamSize, valuation, video, website } = startupData;

    return (
        <div className='flex flex-col items-center  space-y-4 p-8 bg-gray-100 rounded-lg shadow-lg'>
            <div className='relative'>
                <div className='border-yellow-600 border-2 m-3 rounded-full mx-auto p-3'>
                    <img
                        src={logo}
                        alt=''
                        className='w-40 h-40 rounded-full mx-auto '
                    />
                </div>
            </div>

            <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                <legend className='text-gray-700 text-lg'>Startup Name</legend>
                <h1 className='text-purple-900 text-4xl font-bold'>{name}</h1>
            </fieldset>

            <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                <legend className='text-gray-700 text-lg'>Description</legend>
                <p className='text-gray-700 text-lg'>{description}</p>
            </fieldset>

            <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                <legend className='text-gray-700 text-lg'>Elevator Pitch</legend>
                <p className='text-gray-700 text-lg'>{pitch}</p>
            </fieldset>

            <div className='flex flex-2 space-x-1'>
                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Website</legend>
                    <p className='text-purple-500 text-lg'>
                        <a href={website} target='_blank' rel='noopener noreferrer'>
                            {website}
                        </a>
                    </p>
                </fieldset>


                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Video</legend>
                    <p className='text-gray-700 text-lg'>{video}</p>
                </fieldset>
            </div>

            <div className='flex flex-2 space-x-1'>
                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Funding</legend>
                    <p className='text-gray-700 text-lg'>{funding}</p>
                </fieldset>

                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Valuation</legend>
                    <p className='text-gray-700 text-lg'>{valuation}</p>
                </fieldset>
                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Stage</legend>
                    <p className='text-gray-700 text-lg'>{stage}</p>
                </fieldset>
                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Team Size</legend>
                    <p className='text-gray-700 text-lg'>{teamSize}</p>
                </fieldset>
                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Industry</legend>
                    <p className='text-gray-700 text-lg'>{industry}</p>
                </fieldset>

                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Location</legend>
                    <p className='text-gray-700 text-lg'>{location}</p>
                </fieldset>

                <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                    <legend className='text-gray-700 text-lg'>Revenue</legend>
                    <p className='text-gray-700 text-lg'>{revenue}</p>
                </fieldset>
            </div>

            <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                <legend className='text-gray-700 text-lg'>Owner</legend>
                <div className='flex items-center space-x-2'>
                    <p className='text-gray-700'>Created by</p>
                    <img
                        src={ownerPicture}
                        alt=''
                        className='w-10 h-10 rounded-full'
                    />
                    <p className='text-gray-700 text-lg'>{owner}</p>
                </div>
            </fieldset>

            <fieldset className='border-2 border-yellow-600 p-4 rounded-lg'>
                <legend className='text-gray-700 text-lg'>Owner Email</legend>
                <p className='text-gray-700 text-lg'>
                    <a href={`mailto:${ownerEmail}`} className='text-purple-500'>
                        {ownerEmail}
                    </a>
                </p>
            </fieldset>

        </div>

    );
};

export default StartupProfile;
