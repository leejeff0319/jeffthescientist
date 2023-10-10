// components/SkyButton.tsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Sun from './Sun';
import Moon from './Moon'
import Night from './Night';
import Scientist from './Scientist';
import Navbar from './Navbar'
import RSBadge from './RSBadge';
import DSBadge from './DSBadge';
import Resume from './Resume';
import DSResume from './DSResume';




function SkyButton() {
  const [isActivated, setIsActivated] = useState(false);
  const [buttonText, setButtonText] = useState("Data Science");
  const [buttonColor, setButtonColor] = useState("blue-500");

  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [navbarPosition, setNavbarPosition] = useState('0%');

  const sunControls = useAnimation();
  const moonControls = useAnimation();

  const [role, setRole] = useState("Research");
  const [time, setTime] = useState("by day");
  const [currentBadge, setCurrentBadge] = useState('RS');


  const [resumeType, setResumeType] = useState('research');

  const badgeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };

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
        x: "57vw",
        transition: {
          duration: duration
      }
      });  
  }

  

  {/*Animations*/}
  const handleButtonClick = () => {
    if (isActivated) {
      // Play reverse animations
      setBackgroundPosition('0% 0%');
      setNavbarPosition('0%');
      
      sunControls.start({
        x: "0vw",
        backgroundColor: "#FEF08A", // revert to the original sun color
        transition: {
          duration: 1 
        }
      });
      moonControls.start({
        x: "100vw",
        transition: {
          duration: 1 // same as your original duration
        }
      });

      // Set to initial values
      setRole("Research");
      setTime("by day");
      setCurrentBadge('RS');
      setButtonText("Data Science");
      setButtonColor("blue-500");
      document.body.classList.remove('body-gray-800');
      document.body.classList.add('body-blue-100');;
      setResumeType('research');
      setIsActivated(false);
    } 

    else {
      setBackgroundPosition('85% 0%');
      setNavbarPosition('85%');
      setSun();
      setMoon();
      
      setRole(prevRole => prevRole === "Research" ? "Data" : "Research");
      setTime(prevTime => prevTime === "by day" ? "by night" : "by day");

      setCurrentBadge(prevBadge => (prevBadge === 'RS' ? 'DS' : 'RS'));

      setButtonText("Research Science");
      setButtonColor("black");

      document.body.classList.remove('body-blue-100');
      document.body.classList.add('body-gray-800');
      setResumeType('dataScience');
      setIsActivated(true);
    }
      
  };

  return (
      <div className="relative">

          {/* Render the Sun and Night components */}
          <Sun control={sunControls} />
          <Moon control={moonControls} initial={{ x: "100vw" }} />
          <Night backgroundPosition={backgroundPosition} />
          <Navbar navbarPosition={navbarPosition} />
        
          {/* Scientist Animation */}
          <AnimatePresence>
            <Scientist role={role} time={time} key={role} />
          </AnimatePresence>
          
          {/* Badge Animations */}
          <AnimatePresence>
            {currentBadge === 'RS' ? (
              <motion.div 
                 key="RS"  // <-- Add this
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 variants={badgeVariants}
              >
                <RSBadge />
               </motion.div>
             ) : (
              <motion.div 
                key="DS"  // <-- Add this
                initial="initial"
                animate="animate"
                exit="exit"
                variants={badgeVariants}
              >
                <DSBadge />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-start-4 col-end-10">
          {resumeType === 'research' ? <Resume /> : <DSResume />}
          </div>
          </div>

           {/* Animation Button */}
           <button 
               onClick={handleButtonClick} 
               className={`h-20 w-10 fixed top-1/4 right-0 z-50 text-white p-1 rounded-md text-xs flex items-center justify-center ${buttonColor === 'blue-500' ? 'bg-blue-500' : 'bg-black'}`}
            >
               <span className="transform -rotate-90">{buttonText}</span>
           </button>
        </div>
    );
}

export default SkyButton;
