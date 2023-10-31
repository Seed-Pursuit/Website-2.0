import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiInfo, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
    const downloadICal = () => {
        alert('Download iCal functionality');
    };

    return (
        <motion.div whileHover={{ scale: 1.03 }} className="event-card p-4 border border-gray-300 rounded-md text-center bg-[#fff]">
            <img src={event.imageUrl} alt={event.title} className="mb-2 rounded-lg" />
            <h2 className="text-lg font-semibold text-black">{event.title}</h2>
           <div className='font-nunito'>
           <p className="text-gray-500">{event.description}</p>
            <div className="flex items-center mt-2">
                <FiCalendar className="mr-1" />
                <p>{event.date}</p>
            </div>
            <div className="flex items-center mt-1">
                <FiMapPin className="mr-1" />
                <p>{event.venue}</p>
            </div>
            <Link to={`/rsvp/${event.id}`} className="mt-2 text-[#84DCCF] flex items-center">
                <FiInfo className="mr-1" />
                RSVP
            </Link>
            <button className="mt-2 text-[#84DCCF] flex items-center" onClick={downloadICal}>
                <FiDownload className="mr-1" />
                Add to Calendar
            </button>
           </div>
        </motion.div>
    );
};

export default EventCard;
