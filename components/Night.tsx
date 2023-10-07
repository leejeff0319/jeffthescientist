"use client"
import React, { useState } from 'react';

function Night() {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleButtonClick = () => {
    setBackgroundPosition('75% 0%');
  };

  return (
    <div className="bg-blue-100 h-[37vh] flex justify-center">
      <div className="absolute w-full h-[30vh]">
        <div 
          className="background-image bg-no-repeat h-[40vh]" 
          style={{ backgroundPosition: backgroundPosition }}
        />
        <button 
          onClick={handleButtonClick} 
          className="mt-40 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Move Background
        </button>
      </div>
    </div>
  );
}

export default Night;