import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { app, db } from '../../db/Firebase';
import { collection, getDocs } from 'firebase/firestore';

const AllStartups = () => {
    const [allStartups, setAllStartups] = useState([]);

    useEffect(() => {
        const fetchAllStartups = async () => {
            const startupsCollection = collection(db, 'startups');
            const snapshot = await getDocs(startupsCollection);

            const startupsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setAllStartups(startupsData);
        };

        fetchAllStartups();
    }, []);

    return (
        <div className="flex flex-wrap">
            {allStartups.map((startup) => (
                <Link key={startup.id} to={`/startup/${startup.id}`} className="no-underline">
                    <div className="mb-4 bg-white rounded-lg border p-4 cursor-pointer">
                        <img src={startup.logo} alt='' />
                        <h2 className="text-xl text-black">{startup.name}</h2>
                        <p className="text-gray-500">{startup.description}</p>
                        <div className="flex flex-wrap mt-2">
                            <div className="flex flex-wrap mt-2">
                                {startup.tags && startup.tags.map((tag) => (
                                    <span key={tag} className="mr-2 bg-[#84DCCF] text-white text-sm px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <p className="text-gray-500">Location: {startup.location}</p>
                        <p className="text-gray-500">Founder: {startup.founder}</p>
                        <p className="text-gray-500">Employees: {startup.employees}</p>
                        {startup.verified && (
                            <span className="text-green-500">Verified <span role="img" aria-label="green-tick">✅</span></span>
                        )}
                        <a href={startup.website} className="text-red-600 hover:underline">Website</a>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AllStartups;
