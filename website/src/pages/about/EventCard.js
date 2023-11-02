import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiInfo, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
    const randomYear = 2023;
    const randomMonth = Math.floor(Math.random() * 12) + 1; // 1-12
    const randomDay = Math.floor(Math.random() * 31) + 1; // 1-31

    // Format the date
    const formattedRandomDate = new Date(
        `${randomYear}-${randomMonth}-${randomDay}`
    ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const venues = ['Banglore, India', 'Mumbai, India', 'San Diego, USA', 'California, USA', 'New York, USA'];
    const randomVenueIndex = Math.floor(Math.random() * venues.length);
    const randomVenue = venues[randomVenueIndex];

    return (
        <motion.div whileHover={{ scale: 1.03 }} className="event-card p-4 border border-gray-300 rounded-md text-center bg-[#fff]">
            <div className='text-center'>
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="mx-auto mb-2 rounded-lg"
                    style={{ display: 'block' }}
                />
            </div>

            <h2 className="text-lg font-semibold text-black">{event.title}</h2>
            <div className='font-nunito'>
                <p className="text-gray-500">{event.description}</p>
                <div className="flex items-center mt-2">
                    <FiCalendar className="mr-1" />
                    <p>{formattedRandomDate}</p>
                </div>
                <div className="flex items-center mt-1">
                    <FiMapPin className="mr-1" />
                    <p>{randomVenue}</p>
                </div>
                <Link to={`/rsvp/${event.id}`} className="mt-2 text-[#84DCCF] flex items-center">
                    <FiInfo className="mr-1" />
                    RSVP
                </Link>
                <button className="mt-2 text-[#84DCCF] flex items-center">
                    <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NHY1bDY2ZDlnZDZzNzV2ZzVwamtpbW05MmIgdmFpc2huYXZpLmthbGUzMDExQG0&amp;tmsrc=vaishnavi.kale3011%40gmail.com" alt="">
                        <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" />
                    </a>
                </button>
            </div>
        </motion.div>
    );
};

export default EventCard;
