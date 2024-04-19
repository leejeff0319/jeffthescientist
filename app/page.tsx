"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Sun from '../components/Website/Sun';
import Moon from '../components/Website//Moon'
import Night from '../components/Website//Night';
import Scientist from '../components/Website//Scientist';
import Navbar from '../components/Website//Navbar'
import Badges from '../components/Website//Badges';
import ContactFooter from '@/components/Website/ContactFooter';
import HomePage from '@/components/Website/HomePage';
import CertsPage from '@/components/Website/CertsPage';
import ProjectsPage from '@/components/Website/ProjectsPage';
import AboutPage from '@/components/Website/AboutPage';
import NotesPage from '@/components/Website/NotesPage';
import Button from '@/components/Website/Button';
import { Toaster } from 'react-hot-toast';
import RSHours from '@/components/Website/RSHours';
import DSHours from '@/components/Website/DSHours';


export default function Home() {
  const [isActivated, setIsActivated] = useState(false);
  const resumeType = isActivated ? "dataScience" : "research";
  const buttonClass = isActivated ? 'night-btn' : 'day-btn';
  const [currentPage, setCurrentPage] = useState("projects");
  const [showRS, setShowRS] = useState(true); 

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <main className={isActivated ? "dark-theme" : "light-theme"}>
        <div className='role-container absolute z-50'>
          {/* Scientist Animation */}
          <Scientist isActivated={isActivated} />
        </div>

        {/* Render the Sun and Night components */}
        <Sun isActivated={isActivated} />
        <Moon isActivated={isActivated} />
        <Night isActivated={isActivated} />

        {/* Navbar */}
        <Navbar isActivated={isActivated} onPageChange={handlePageChange} />
        <div className="absolute top-2/5 left-0 w-1/4 h-full">
          {/* Badge Container */}
          <div className="badge-container absolute top-100">
            {/* Badge Animations */}
            <Badges isActivated={isActivated} />

            {/* "Download CV" Button */}
            <div className='relative top-5 ml-16'>
              <a href={isActivated ? "/path-to-night-cv.pdf" : "/path-to-day-cv.pdf"}
                download
                className={` ${buttonClass}`}>
                Download CV
              </a>
            </div>
          </div>
          <div className='relative top-56 mx-6'>
            {/* Feedback Footer */}
            {/* <ContactFooter isDark={isActivated} /> */}
          </div>
        </div>
        
        {/* Page loader */}
        <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="homePage"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <HomePage resumeType={resumeType} showRS={!isActivated} />
          </motion.div>
        )}

        {currentPage === "about" && (
          <motion.div
            key="aboutPage"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AboutPage isDarkTheme={isActivated} />
          </motion.div>
        )}

        {currentPage === "projects" && (
          <motion.div
            key="projectsPage"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ProjectsPage isDarkTheme={isActivated} />
          </motion.div>
        )}

        {currentPage === "notes" && (
          <motion.div
            key="projectsPage"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <NotesPage isDarkTheme={isActivated} />
          </motion.div>
        )}

        {currentPage === "certifications" && (
          <motion.div
            key="certsPage"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CertsPage isDarkTheme={isActivated} />
          </motion.div>
        )}
        </AnimatePresence>
      
        {/* Hours */}
        <AnimatePresence mode='wait'>
          {resumeType === "research" ? (
            <motion.div
              key="RSHours"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <RSHours />
            </motion.div>
          ) : (
            <motion.div
              key="DSHours"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DSHours />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feedback Footer */}
        <ContactFooter isDark={isActivated} />

        <Toaster position="top-right" />
        
        {/* Animation Button */}
        <Button isActivated={isActivated} onToggle={() => setIsActivated(prevState => !prevState)} />
    </main>



  )
}
