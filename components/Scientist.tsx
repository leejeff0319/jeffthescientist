import React from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence} from 'framer-motion';

interface ScientistProps {
  isActivated:boolean;
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

const Scientist: React.FC<ScientistProps> = ({ isActivated }) => {
  const role = isActivated ? "Data" : "Research";
  const time = isActivated ? "by night" : "by day";
  const roleClass = role === 'Data' ? 'left-48' : 'left-20';

  return (
    <>
    <LazyMotion features={domAnimation}>
    <AnimatePresence mode='wait'>
      {/* Sliding Animation for Role */}
      <m.span
      key={`${role}-${time}`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideVariants}
        transition={{ duration: 0.5 }}
        className={`absolute top-64 ${roleClass} text-blue-700 bg-transparent text-5xl text-shadow font-bold`}>
        {role}
      </m.span>
    
      {/* Fading Animation for Time */}
      <m.span
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeVariants}
        transition={{ duration: 0.5 }}
        className="absolute top-80 left-96 text-blue-700 bg-transparent text-3xl text-shadow font-bold whitespace-nowrap"
      >
        {time}
      </m.span>
      </AnimatePresence>
      </LazyMotion>
      <span className="absolute top-64 left-80 text-blue-700 bg-transparent text-5xl text-shadow font-bold">
        Scientist
      </span>
    </>
  );
}

export default Scientist;
