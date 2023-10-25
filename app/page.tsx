"use client";
import React, { useState, useEffect } from 'react';
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
import ProjectsPage from '@/components/ProjectsPage';
import AboutPage from '@/components/AboutPage';
import NotesPage from '@/components/NotesPage';

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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.add('body-blue-100');
    return () => {
      document.body.classList.remove('body-blue-100');
    };
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const themeConfig = {
    light: {
      role: "Research",
      time: "by day",
      badge: "RS",
      buttonText: "Data Science",
      buttonColor: "blue-500",
      bodyClass: 'body-blue-100',
      resumeType: 'research',
      showRS: true
    },
    dark: {
      role: "Data",
      time: "by night",
      badge: "DS",
      buttonText: "Research Science",
      buttonColor: "black",
      bodyClass: 'body-gray-800',
      resumeType: 'dataScience',
      showRS: false
    }
  };

  const toggleAnimation = (activate: boolean) => {
    const moveDistance = window.innerWidth + (activate ? (document.querySelector('.moon') as HTMLElement)?.offsetWidth ?? 0 : (document.querySelector('.sun') as HTMLElement)?.offsetWidth ?? 0);

    sunControls.start({
      x: activate ? -moveDistance : "0vw",
      backgroundColor: activate ? "#F87171" : "#FEF08A",
      transition: { duration: activate ? 4 : 1 }
    });

    moonControls.start({
      x: activate ? window.innerWidth - moveDistance : "100vw",
      transition: { duration: 1 }
    });
  };

  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    setIsDarkTheme(prev => !prev);
    const config = isActivated ? themeConfig.light : themeConfig.dark;
    toggleAnimation(!isActivated);
    setBackgroundPosition(isActivated ? '0% 0%' : '85% 0%');
    setNavbarPosition(isActivated ? '0%' : '85%');
    setRole(config.role);
    setTime(config.time);
    setCurrentBadge(config.badge);
    setButtonText(config.buttonText);
    setButtonColor(config.buttonColor);
    document.body.classList.remove(themeConfig.light.bodyClass, themeConfig.dark.bodyClass);
    document.body.classList.add(config.bodyClass);
    setResumeType(config.resumeType);
    setShowRS(config.showRS);
    setIsActivated(!isActivated);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className='role-container absolute z-50'>
        {/* Scientist Animation */}
        <AnimatePresence>
          <Scientist role={role} time={time} key={role} />
        </AnimatePresence>
      </div>

      {/* Render the Sun and Night components */}
      <Sun control={sunControls} />
      <Moon control={moonControls} initial={{ x: "60vw" }} />
      <Night backgroundPosition={backgroundPosition} />

      {/* Navbar */}
      <Navbar navbarPosition={navbarPosition} onPageChange={handlePageChange} />

      {/* Badge Container */}
      <div className="badge-container absolute top-100">
        {/* Badge Animations */}
        <AnimatePresence mode='wait'>
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
        <div className='relative top-5 ml-16'>
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

        {currentPage === "about" && (
          <motion.div
            key="aboutPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AboutPage isDarkTheme={isDarkTheme} />
          </motion.div>
        )}

        {currentPage === "projects" && (
          <motion.div
            key="projectsPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ProjectsPage isDarkTheme={isDarkTheme} />
          </motion.div>
        )}

        {currentPage === "notes" && (
          <motion.div
            key="projectsPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NotesPage isDarkTheme={isDarkTheme} />
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
            <CertsPage isDarkTheme={isDarkTheme} />
          </motion.div>
        )}

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



  )
}
