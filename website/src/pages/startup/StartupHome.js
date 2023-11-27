import React, { useState } from 'react';
import { app } from '../../db/Firebase'; 
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const StartupHome = () => {
  const [startupName, setStartupName] = useState('');
  const [startupDescription, setStartupDescription] = useState('');
  const firestore = getFirestore(app);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique key for the startup
    const startupKey = uuidv4();

    // Save startup profile to Firebase Firestore with the unique key
    const startupRef = doc(firestore, 'startups', startupKey);
    await setDoc(startupRef, {
      name: startupName,
      description: startupDescription,
    });

    // Clear form fields
    setStartupName('');
    setStartupDescription('');

    // Redirect to the created startup profile using the unique key
    window.location.href = `/startup/${startupKey}`;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Startup Name:
        <input type="text" value={startupName} onChange={(e) => setStartupName(e.target.value)} />
      </label>
      <label>
        Startup Description:
        <textarea value={startupDescription} onChange={(e) => setStartupDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StartupHome;
