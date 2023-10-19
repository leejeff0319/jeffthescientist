import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Certs = () => {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {  // 100 is the scroll position where the animation will start
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({
                x: 0,
                rotateY: 0,
                transition: { duration: 0.5 }
            });
        } else {
            controls.start({
                x: '-100vw', // or '100vw' for the right side
                rotateY: 180,
                transition: { duration: 0.5 }
            });
        }
    }, [isVisible, controls]);

    return (
        <div>
            <div className="container">  {/*add skills here*/}
                <div className="hero mt-5 mb-5">
                    <img className="logo" src="" alt="" />
                    <img className="front-image" src="GADA_fi_transparent.png" alt="" />
                    <img className="bg-certs" src="GADA.png" alt="" />
                </div>
            </div>

            <div className="hero mt-5 mb-5">
                <img className="logo" src="" alt="" />
                <img className="front-image" src="p4e_fi.png" alt="" width='400px' />
                <img className="bg-certs" src="p4e.png" alt="" />
            </div>
            
            <div className="hero mt-5 mb-5">
                <img className="logo" src="" alt="" />
                <img className="front-image" src="GDA_fi_transparent.png" alt="" />
                <img className="bg-certs" src="GDA.png" alt="" />
            </div>
        </div>
    );
};

export default Certs;