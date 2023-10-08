// components/SkyButton.tsx
"use client";
import React, { useState } from 'react';
import { useAnimation } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Sun from './Sun';
import Moon from './Moon'
import Night from './Night';
import Scientist from './Scientist';
import Navbar from './Navbar'

function SkyButton() {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [navbarPosition, setNavbarPosition] = useState('0%');
  const sunControls = useAnimation();
  const moonControls = useAnimation();
  const [role, setRole] = useState("Research");
  const [time, setTime] = useState("by day");
  
  const setSun = () => {
    // The travel distance as a fraction of viewport width (e.g., if sun needs to travel half the viewport width, fraction will be 0.5)
    const travelFraction = window.innerWidth / (2 * window.innerWidth);
    
    // A constant value for how long it should take the sun to travel the entire width of the viewport.
    const fullScreenWidthDuration = 4; // 10 seconds to travel full viewport width, adjust as needed

    const duration = fullScreenWidthDuration * travelFraction;

      sunControls.start({
         
        x: "-50vw",
        backgroundColor: "#F87171", // This is roughly tailwind's orange-600
        transition: {
          duration: duration
      }
    
      });  
  }

  const setMoon = () => {
    // The travel distance as a fraction of viewport width (e.g., if sun needs to travel half the viewport width, fraction will be 0.5)
    const travelFraction = window.innerWidth / (2 * window.innerWidth);
    
    // A constant value for how long it should take the sun to travel the entire width of the viewport.
    const fullScreenWidthDuration = 4; 

    const duration = fullScreenWidthDuration * travelFraction;

      moonControls.start({
         
        x: "55vw",
        transition: {
          duration: duration
      }
    
      });  
  }

  {/*Animations*/}
  const handleButtonClick = () => {
      setBackgroundPosition('85% 0%');
      setNavbarPosition('85%');
      setSun();
      setMoon();
      
      setRole(prevRole => prevRole === "Research" ? "Data" : "Research");
      setTime(prevTime => prevTime === "by day" ? "by night" : "by day");
  };

  return (
      <div className="relative">
          {/* Render the Sun and Night components */}
          <Sun control={sunControls} />
          <Moon control={moonControls} initial={{ x: "100vw" }} />
          <Night backgroundPosition={backgroundPosition} />
          <AnimatePresence>
            <Scientist role={role} time={time} key={role} />
          </AnimatePresence>
          <Navbar navbarPosition={navbarPosition} />
           
           {/* The actual button to trigger animations */}
           <button 
               onClick={handleButtonClick} 
               className="h-20 w-10 fixed top-1/4 right-0 z-50 bg-black text-white p-1 rounded-md text-xs flex items-center justify-center"
            >
               <span className="transform -rotate-90">Data Science</span>
           </button>
      </div>
    );
}

export default SkyButton;
