// This is the App.js
"use client";
import React, { useState, useEffect } from 'react';
import { authenticate } from './SpotifyAuth';

const App = () => {
    const [token, setToken] = useState('');

    // Extract the access token from URL on component mount
    useEffect(() => {
      const hash = window.location.hash;
      let tokenFromStorage = window.localStorage.getItem('token');
  
      if (!tokenFromStorage && hash) {
          const match = hash.match(/access_token=([^&]*)/);
          tokenFromStorage = match ? match[1] : null;
          window.location.hash = '';
          if (tokenFromStorage) {
              window.localStorage.setItem('token', tokenFromStorage);
          }
      }
  
      setToken(tokenFromStorage || ''); // Provide an empty string as fallback
  }, []);

    const getRecentActivity = () => {
        // Placeholder for fetching recent activity from Spotify
    };

    if (!token) {
        return (
            <div>
                <button onClick={authenticate}>Log in with Spotify</button>
            </div>
        );
    }

    return (
        <div>
            {/* Placeholder for your main app interface */}
            <p>Logged in successfully</p>
        </div>
    );
};

export default App;