// components/Sun.tsx

"use client"
import { motion, useAnimation } from 'framer-motion';

function Sun() {
  const controls = useAnimation();

  const setSun = () => {
    controls.start({
      x: "-30vw",
      backgroundColor: "#F87171" // This is roughly tailwind's orange-600
    });
  }

  return (
    <>
      <motion.div 
        initial={{ backgroundColor: "#FEF08A" }} // This is roughly tailwind's yellow-200
        animate={controls}
        transition={{ duration: 4, ease: "easeOut" }}
        className="bg-yellow-200 rounded-full absolute top-2 left-40 w-16 h-16 overflow-visible"
      />
    </>
  );
}

export default Sun;
