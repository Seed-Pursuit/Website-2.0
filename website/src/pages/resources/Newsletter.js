import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import app from './Firebase';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async () => {
        if (email && name) {
            const db = getDatabase(app);

            try {
                const newSubscriberRef = push(ref(db, 'newsletterSubscribers'));
                const newSubscriberKey = newSubscriberRef.key;
                set(newSubscriberRef, {
                    email,
                    name,
                });
                setEmail('');
                setName('');
                setSubmitted(true);
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <div className="text-center mb-6">
                <h1 className="text-4xl text-black mb-4">Subscribe to Our Newsletter</h1>
                <p className="text-lg text-gray-700">
                    Stay updated with our latest news and updates by subscribing to our newsletter.
                </p>
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 mr-2 rounded-l border border-gray-300"
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 mr-2 rounded-l border border-gray-300"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button
                    className="bg-[#84DCCF] text-white p-2 rounded-r"
                    onClick={handleSubmit}
                >
                    Subscribe
                </button>
            </div>
            {submitted && (
                <p className="text-lg text-green-600 mt-4">Thank you for subscribing!</p>
            )}
        </div>
    );
};

export default Newsletter;
