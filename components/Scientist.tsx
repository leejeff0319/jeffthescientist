import React from 'react';
import { motion } from 'framer-motion';

interface ScientistProps {
  role: string;
  time: string;
}

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideVariants = {
  hidden: { x: 50, opacity: 0 },   // start from 50 pixels to the right
  visible: { x: 0, opacity: 1 },   // end at its original position
  exit: { x: -50, opacity: 0 }    // exit to the left
};

const Scientist: React.FC<ScientistProps> = ({ role, time }) => {
  // Compute left positioning based on word width
  const roleClass = role === 'Data' ? 'left-48' : 'left-20';

  return (
    <>
      {/* Sliding Animation for Role */}
      <motion.span
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideVariants}
        transition={{ duration: 1 }}
        className={`absolute bottom-24 ${roleClass} text-blue-600 bg-transparent text-5xl text-shadow font-bold`}>
        {role}
      </motion.span>
      <span className="absolute bottom-24 left-80 text-blue-600 bg-transparent text-5xl text-shadow font-bold">
        Scientist
      </span>
      {/* Fading Animation for Time */}
      <motion.span
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeVariants}
        transition={{ duration: 1 }}
        className="absolute top-80 left-96 text-blue-600 bg-transparent text-3xl text-shadow font-bold"
      >
        {time}
      </motion.span>
    </>
  );
}

export default Scientist;
