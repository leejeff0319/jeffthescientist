// components/Button.tsx

"use client"
import React from 'react';
import { motion } from 'framer-motion';


function Button() {
  const handleClick = () => {

  };

  return (
    <motion.button 
        onClick={handleClick}
        className=" h-20 w-10 fixed top-1/4 right-0 z-50 bg-black text-white p-1 rounded-md text-xs flex items-center justify-center"
    >
        <span className="transform -rotate-90">Data Science</span>
    </motion.button>
  );
}

export default Button;