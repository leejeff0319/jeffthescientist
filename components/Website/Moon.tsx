// components/Moon.tsx
import { m } from 'framer-motion';
import React, { useState, useEffect } from "react";

interface MoonProps {
  isActivated: boolean;
}

function Moon({ isActivated }: MoonProps) {
  const [moveDistance, setMoveDistance] = useState<number>(0);

  useEffect(() => {
    // This code will only run in the browser and not during SSR.
    const distance = window.innerWidth + (isActivated ? (document.querySelector('.moon') as HTMLElement)?.offsetWidth ?? 0 : (document.querySelector('.sun') as HTMLElement)?.offsetWidth ?? 0);
    setMoveDistance(distance);
  }, [isActivated]);

  const moonControls = {
    x: isActivated ? window.innerWidth - moveDistance : "100vw",
    transition: { duration: 1 }
  };

  return (
    <m.div
      animate={moonControls}
      initial={{ x: "60vw" }}
      transition={{ duration: 4, ease: "easeOut" }}
      className="moon absolute top-4 left-96 w-16 h-16 z-20 overflow-visible">
      <div className="crater small"></div>
      <div className="crater medium"></div>
      <div className="crater large"></div>
      <div className="crater xsmall"></div>
      <div className="crater xlarge"></div>
    </m.div>

  );
}

export default Moon;