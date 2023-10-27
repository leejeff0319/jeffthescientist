"use client";
import React, { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Sun from '../components/Sun';
import Moon from '../components//Moon'
import Night from '../components//Night';
import Scientist from '../components//Scientist';
import Navbar from '../components//Navbar'
import Badges from '../components//Badges';
import ContactFooter from '@/components/ContactFooter';
import HomePage from '@/components/HomePage';
import CertsPage from '@/components/CertsPage';
import ProjectsPage from '@/components/ProjectsPage';
import AboutPage from '@/components/AboutPage';
import NotesPage from '@/components/NotesPage';
import Button from '@/components/Button';

export default function Home() {
  const [isActivated, setIsActivated] = useState(false);

  const resumeType = isActivated ? "dataScience" : "research";

  const buttonClass = isActivated ? 'night-btn' : 'day-btn';
  const [currentPage, setCurrentPage] = useState("home");

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
      <LazyMotion features={domAnimation}>
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

        {/* Page loader */}
        {currentPage === "home" && (
          <m.div
            key="homePage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <HomePage resumeType={resumeType} showRS={!isActivated} />
          </m.div>
        )}

        {currentPage === "about" && (
          <m.div
            key="aboutPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AboutPage isDarkTheme={isActivated} />
          </m.div>
        )}

        {currentPage === "projects" && (
          <m.div
            key="projectsPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ProjectsPage isDarkTheme={isActivated} />
          </m.div>
        )}

        {currentPage === "notes" && (
          <m.div
            key="projectsPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NotesPage isDarkTheme={isActivated} />
          </m.div>
        )}

        {currentPage === "certifications" && (
          <m.div
            key="certsPage"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CertsPage isDarkTheme={isActivated} />
          </m.div>
        )}

        {/* Feedback Footer */}
        <ContactFooter isDark={isActivated} />

        {/* Animation Button */}
        <Button isActivated={isActivated} onToggle={() => setIsActivated(prevState => !prevState)} />
      </LazyMotion>
    </main>



  )
}
