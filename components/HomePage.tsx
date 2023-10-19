// HomePage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Resume from '../components/Resume';
import DSResume from '../components/DSResume';
import RSHours from '@/components/RSHours';
import DSHours from '@/components/DSHours';

type HomePageProps = {
    resumeType: string;
    showRS: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ resumeType, showRS }) => {
    const fadeVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };
    return (
        <>
            {/* Resume */}
            <div className="grid grid-cols-12 gap-4 mt-10">
                <div className="col-start-4 col-end-10">

                    {/* Resume Animation */}
                    <AnimatePresence mode='wait'>
                        {resumeType === 'research' ? (
                            <motion.div
                                key="RSResume"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={fadeVariants}
                            >
                                <Resume />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="DSResume"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={fadeVariants}
                            >
                                <DSResume />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Hours */}
            <AnimatePresence mode='wait'>
                {showRS ? (
                    <motion.div
                        key="RSHours"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                    >
                        <RSHours />
                    </motion.div>
                ) : (
                    <motion.div
                        key="DSHours"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeVariants}
                    >
                        <DSHours />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default HomePage;
