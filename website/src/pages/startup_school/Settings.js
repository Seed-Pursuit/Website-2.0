import React, { useState, useEffect } from 'react';
import Sidebar from '../find_a_co_founder/Sidebar';
import { app } from '../../db/Firebase';
import { get, getDatabase, ref, set } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';

const Settings = () => {
    const db = getDatabase(app);
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [smsUpdates, setSmsUpdates] = useState(true);
  
    useEffect(() => {
      if (isAuthenticated) {
        const userRef = ref(db, `users/${user.sub}/notificationPreferences`);
  
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const preferences = snapshot.val();
              setEmailUpdates(preferences.emailUpdates);
              setSmsUpdates(preferences.smsUpdates);
            }
          })
          .catch((error) => {
            console.error('Error fetching preferences:', error);
          });
      }
    }, [isAuthenticated, user.sub]);
  
    const handleEmailUpdateChange = () => {
      setEmailUpdates(!emailUpdates);
    };
  
    const handleSmsUpdateChange = () => {
      setSmsUpdates(!smsUpdates);
    };
  
    const saveNotificationPreferences = () => {
      if (isAuthenticated) {
        const userRef = ref(db, `users/${user.sub}/notificationPreferences`);
  
        const preferences = {
          emailUpdates,
          smsUpdates,
        };
  
        set(userRef, preferences)
          .then(() => {
            console.log('Notification preferences saved successfully');
          })
          .catch((error) => {
            console.error('Error saving preferences:', error);
          });
      }
    };
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="flex">
        <Sidebar />
        <div className="p-20">
          <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
          <div className="mb-4">
            <label className="block text-gray-600">Email Updates</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-500"
                  checked={emailUpdates}
                  onChange={handleEmailUpdateChange}
                />
                <span className="ml-2">Receive email updates</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">SMS Updates</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-500"
                  checked={smsUpdates}
                  onChange={handleSmsUpdateChange}
                />
                <span className="ml-2">Receive SMS updates</span>
              </label>
            </div>
          </div>
          <button
            onClick={saveNotificationPreferences}
            className="bg-yellow-500 text-white py-2 px-4 rounded"
          >
            Save Preferences
          </button>
        </div>
      </div>
    );
  };
  
  export default Settings;