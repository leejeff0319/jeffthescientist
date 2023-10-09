import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css'
import { RiGithubFill,
         RiLinkedinBoxFill,
         RiMailFill } from 'react-icons/ri';

const RSBadge: React.FC = () => {
    return (
        <div className="absolute" style={{ top: '100%' }}>
            {/*Profile Pic*/}
            <div className="absolute top-0 left-0 z-10">
                <Image src="/profile.jpg" objectFit="cover" width="60" height="50" alt="Profile Picture" className="mt-5 ml-4"/>
            </div>

            {/*Badge*/}
            {/*Badge-Top*/}
            <div className="mt-3 bg-black  p-1 ml-2 pl-4 pr-24 rounded-t-md">
                <p className="relative mt-2 justify-left left-16 text-sm text-white font-bold">
                    Jeff Youngjae Lee
                </p>
                <p className="relative justify-left left-16 text-white text-xs mt-1">
                    Data Scientist
                </p>
                <p className="relative justify-left left-16 text-white text-xs">
                    Machine Learning
                </p>
                <p className="relative text-xs text-white ">
                    leejeff0319@gmail.com
                </p> 
            </div>

            {/*Badge-Bottom*/}
            <div className="bg-gray-500 p-1 ml-2  pl-4 rounded-b-md">
                <p className="text-white font-bold relative justify-left text-xs">
                </p>
                <div className="flex space-x-4 relative justify-center">
                    {/* Gmail Logo */}
                    <Link 
                        href="mailto:leejeff0319@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-all duration-300 glow-on-hover"
                    >
                        <RiMailFill size={30}/>
                    </Link>

                    {/* GitHub Logo */}
                    <Link 
                        href="https://github.com/leejeff0319" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-all duration-300 glow-on-hover"
                    >
                        <RiGithubFill size={30}/>
                    </Link>
        
                     {/* LinkedIn Logo */}
                     <Link 
                        href="https://www.linkedin.com/in/jeff-lee-9b82091a6/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-all duration-300 glow-on-hover"
                    >
                        <RiLinkedinBoxFill size={30}/>
                    </Link>

                     {/* Kaggle Logo */}
                     <Link 
                        href="https://www.kaggle.com/jeffyoungjaelee" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-all duration-300 glow-on-hover"
                    >
                        <img src='KaggleFill-removebg.png' width='30' height='30'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RSBadge;