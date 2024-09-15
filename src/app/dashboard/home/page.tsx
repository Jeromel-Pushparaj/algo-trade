
'use client';

import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [apiContent, setApiContent] = useState<string>('No content yet');
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // Function to simulate fetching content from an API
  const fetchApiContent = () => {
    setIsFetching(true);
    setTimeout(() => {
      // Simulating a response from an API
      const content = "Content fetched from the API!";
      setApiContent(content);
      setIsFetching(false);
    }, 2000); // Simulate a 2 second delay for fetching
  };

  // Handles the "Start" button click
  const handleStart = () => {
    fetchApiContent();
  };

  // Handles the "Stop" button click
  const handleStop = () => {
    setApiContent('Fetching stopped');
    setIsFetching(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Buttons */}
      <div className="mb-8">
        <button
          onClick={handleStart}
          disabled={isFetching}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md mr-4 ${
            isFetching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isFetching}
          className={`px-4 py-2 bg-red-600 text-white rounded-md ${
            !isFetching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
          }`}
        >
          Stop
        </button>
      </div>

      {/* API Content Display */}
      <div className="w-64 h-64 bg-white shadow-md border border-gray-300 flex items-center justify-center text-center">
        <p>{apiContent}</p>
      </div>
    </div>
  );
};

export default HomePage;
