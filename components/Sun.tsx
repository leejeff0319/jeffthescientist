// components/Sun.tsx
import { m} from 'framer-motion';
import React, { useState, useEffect } from "react";

interface SunProps {
  isActivated: boolean;
}

function Sun(props: SunProps) {
  const { isActivated } = props;
  const [moveDistance, setMoveDistance] = useState<number>(0);

  useEffect(() => {
    // This code will only run in the browser and not during SSR.
    const distance = window.innerWidth + (isActivated ? (document.querySelector('.moon') as HTMLElement)?.offsetWidth ?? 0: 0);
    setMoveDistance(distance);
  }, [isActivated]); // The effect will re-run if `isActivated` changes.

  const sunControls = {
    x: isActivated ? -moveDistance : "0vw",
    backgroundColor: isActivated ? "#F87171" : "#FEF08A",
    transition: { duration: isActivated ? 4 : 1 }
  };

  return (
      <m.div 
          initial={{ backgroundColor: "#FEF08A" }}
          animate={sunControls}
          transition={{ duration: 4, ease: "easeOut" }}
          className="sun bg-yellow-200 rounded-full absolute top-4 left-20 w-20 h-20 z-20 overflow-visible"
      />
  );
}

export default Sun;