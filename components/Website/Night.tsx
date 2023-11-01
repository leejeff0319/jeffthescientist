import React, { useState, useEffect } from 'react';

interface NightProps {
  isActivated: boolean;
}

function Night({ isActivated }: NightProps) {
    const backgroundPosition = isActivated ? '85% 0%' : '0% 0%';
    const cloudSpacing = 100 / 3;


    const [starsPositions, setStarsPositions] = useState<{ top: string; left: string }[]>([]);
    const [cloudsPositions, setCloudsPositions] = useState<{ top: string; left: string }[]>([]);

    useEffect(() => {
        const stars = Array(100).fill(null).map(() => ({
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`
        }));
        setStarsPositions(stars);

        const clouds = Array(5).fill(null).map((_, index) => ({
            top: `${Math.random() * 20}%`,  // This ensures clouds are within the top 30% of the Night component
            left: `${index * cloudSpacing + (Math.random() * cloudSpacing - 50)}%`
        }));
        setCloudsPositions(clouds);
    }, []);

    return (
        <div className="night bg-blue-100">
            <div className="background-image bg-no-repeat h-[40vh] transition-all duration-3000 ease-in-out" style={{ backgroundPosition: backgroundPosition }} />
            <div className="grass-image bg-no-repeat h-[8vh] transition-all duration-3000 ease-in-out" style={{ backgroundPosition: backgroundPosition }} />
    
            {/* Stars */}
            {starsPositions.map((pos, index) => (
                <div key={index} className={`star ${isActivated ? 'star-fade-in' : ''}`} style={pos}></div>
            ))}
    
            {/* Clouds */}
            {cloudsPositions.map((pos, index) => {
                const translateX = isActivated ? `${Math.random() * 50 - 25}vw` : '0vw';
                return (
                    <div key={index} className="cloud" style={{ ...pos, transform: `translateX(${translateX})` }}></div>
                );
            })}
        </div>
    );
}
export default Night;