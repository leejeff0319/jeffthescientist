"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Sun from '../components/Sun';
import Moon from '../components//Moon'
import Night from '../components//Night';
import Scientist from '../components//Scientist';
import Navbar from '../components//Navbar'
import RSBadge from '../components//RSBadge';
import DSBadge from '../components//DSBadge';
import ContactFooter from '@/components/ContactFooter';
import HomePage from '@/components/HomePage';
import CertsPage from '@/components/CertsPage';

export default function Home() {
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
  const [showRS, setShowRS] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const buttonClass = isActivated ? 'night-btn' : 'day-btn';
  const [currentPage, setCurrentPage] = useState("home");

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const setSun = () => {
    // The travel distance as a fraction of viewport width (e.g., if sun needs to travel half the viewport width, fraction will be 0.5)
    const travelFraction = window.innerWidth / (2 * window.innerWidth);

    // A constant value for how long it should take the sun to travel the entire width of the viewport.
    const fullScreenWidthDuration = 4; // 10 seconds to travel full viewport width, adjust as needed
    const duration = fullScreenWidthDuration * travelFraction;

    sunControls.start({
      x: "-30vw",
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

  {/*Animations*/ }
  const handleButtonClick = () => {
    setIsButtonDisabled(true);

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
      setShowRS(true);

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
      setShowRS(false);

      setIsActivated(true);
    }
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div >
      <div className="h-[37vh] flex justify-center">
        <div className="absolute w-full h-[30vh]">

          <div className="relative">

            {/* Render the Sun and Night components */}
            <Sun control={sunControls} />
            <Moon control={moonControls} initial={{ x: "100vw" }} />
            <Night backgroundPosition={backgroundPosition} />
            <Navbar navbarPosition={navbarPosition} onPageChange={handlePageChange} />

            {/* Scientist Animation */}
            <AnimatePresence>
              <Scientist role={role} time={time} key={role} />
            </AnimatePresence>


            <div className="badge-container absolute top-100">
              {/* Badge Animations */}
              <AnimatePresence>
                {currentBadge === 'RS' ? (
                  <motion.div
                    key="RS"  // <-- Add this
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={fadeVariants}
                  >
                    <RSBadge />
                  </motion.div>
                ) : (
                  <motion.div
                    key="DS"  // <-- Add this
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={fadeVariants}
                  >
                    <DSBadge />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* "Download CV" Button */}
              <div className='relative top-40 ml-16'>
                <a href={isActivated ? "/path-to-night-cv.pdf" : "/path-to-day-cv.pdf"}
                  download
                  className={` ${buttonClass}`}>
                  Download CV
                </a>
              </div>
            </div>

            {/* Load Home Page */}
            <AnimatePresence mode='wait'>
              {currentPage === "home" && (
                <motion.div
                  key="homePage"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <HomePage resumeType={resumeType} showRS={showRS} />
                </motion.div>
              )}

              {currentPage === "certifications" && (
                <motion.div
                  key="certsPage"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <CertsPage />
                </motion.div>
              )}

              {/* ... for other pages ... */}
            </AnimatePresence>

            {/* Feedback Footer */}
            <ContactFooter isDark={isActivated} />

            {/* Animation Button */}
            <button
              onClick={handleButtonClick}
              disabled={isButtonDisabled}
              className={`h-20 w-10 fixed top-1/4 right-0 z-50 text-white p-1 rounded-md text-xs flex items-center justify-center ${buttonColor === 'blue-500' ? 'bg-blue-500' : 'bg-black'}`}
            >
              <span className="transform -rotate-90">{buttonText}</span>
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}
