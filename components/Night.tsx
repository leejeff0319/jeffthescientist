import React from 'react';

interface NightProps {
  backgroundPosition: string;
}

function Night({ backgroundPosition }: NightProps) {
  const isNight = backgroundPosition === '85% 0%';
  const cloudSpacing = 100 / 3; 

  const stars = Array(100).fill(null).map((_, index) => {
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`; // stars on the right side (from 80% to 100% of the width)
      return (
          <div key={index} className={`star ${isNight ? 'star-fade-in' : ''}`} style={{ top, left }}></div>
      );
  });

  const clouds = Array(5).fill(null).map((_, index) => {
    const top = `${Math.random() * 20}%`;
    const left = `${index * cloudSpacing + (Math.random() * cloudSpacing - 50)}%`; 
    const translateX = isNight ? `${Math.random() * 50 - 25}vw` : '0vw';
    return (
        <div key={index} className="cloud" style={{ top, left, transform: `translateX(${translateX})` }}></div>
    );
});

  return (
      <div className="bg-blue-100 h-[37vh] flex justify-center">
          <div className="absolute w-full h-[30vh]">
              <div 
                  className="background-image bg-no-repeat h-[40vh] transition-all duration-3000 ease-in-out" 
                  style={{ backgroundPosition: backgroundPosition }}
              />
              <div 
                  className="grass-image bg-no-repeat h-[8vh] transition-all duration-3000 ease-in-out" 
                  style={{ backgroundPosition: backgroundPosition }}
              />
              {stars}
              {clouds}
          </div>
      </div>
  );
}

export default Night;