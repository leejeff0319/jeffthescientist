import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import {
    RiReactjsFill,
    RiCss3Fill,
    RiJavascriptFill,
    RiHtml5Fill,
    RiBootstrapFill
} from 'react-icons/ri';
import { BiLogoTailwindCss,
        BiGitBranch,
        BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs,
        } from 'react-icons/tb';
import { DiNodejsSmall } from 'react-icons/di';
import {
    SiJest,
    SiRstudio,
    SiTensorflow,
    SiPytorch,
    SiMicrosoftexcel,
    SiTableau,
    SiJupyter
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { PiFileSql } from 'react-icons/pi';
import { ImStatsDots } from 'react-icons/im';
import Image from 'next/image';


function DSResume() {
    const [activeTab, setActiveTab] = useState('education');
    const [iconsSize, seticonsSize] = useState<number>(30); // default size 30

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth > 1024) { 
                seticonsSize(40);
            } else {
                seticonsSize(iconsSize);
            }
        };

        // Initial setup
        updateSize();

        // Setup the event listener
        window.addEventListener('resize', updateSize);
        
        // Cleanup on component unmount
        return () => window.removeEventListener('resize', updateSize);
    }, [iconsSize]);

    const content = {
        education: (
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xxs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl">
                        <Image 
                        src="/Gvandy.png"
                        width={50}
                        height={50} 
                        alt="Vanderbilt University Logo" className="w-12 h-8" />
                        <span><strong>Vanderbilt University</strong>- B.S. Chemistry</span>
                    </div>
                    <div className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        <span>GPA: 3.53</span>
                    </div>
                </div>
                <ul className="list-disc pl-5 mt-1 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                <li>Co-founded <a href="https://www.cupps.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline"><strong>CUPPS.org</strong></a></li>
                    <li>Co-directed the <strong>“I’m Good, How Are You”</strong> Podcast</li>
                    <li>Elected <strong>Pledge Class President </strong>of Alpha Phi Omega</li>
                    <li><strong>3.78 GPA</strong> during the final 3 Semesters while taking 18 credit hours and working 20+ hours/week</li>
                </ul>
            </div>
        ),
        skills: (
                <div>
                    <div className="mb-2">
                        <span className="block text-left text-xxs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl"><strong>Data Science</strong>- AI / Machine Learning</span>
                        <div className="flex space-x-2 md:space-x-8 lg:space-x-16 justify-center">
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <FaPython size={iconsSize} className="icon glow-icon-on-hover"/>
                                Python
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiTensorflow size={iconsSize} className="icon glow-icon-on-hover"/>
                                Tensorflow
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiPytorch size={iconsSize} className="icon glow-icon-on-hover" />
                                Pytorch
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiJupyter size={iconsSize} className="icon glow-icon-on-hover" />
                                JupyterNotes
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <div className="flex space-x-2 md:space-x-8 lg:space-x-16 justify-center">
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <PiFileSql size={iconsSize} className="icon glow-icon-on-hover" />
                                SQL
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiRstudio size={iconsSize} className="icon glow-icon-on-hover" />
                                RStudio
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <ImStatsDots size={iconsSize} className="icon glow-icon-on-hover" />
                                Statistics
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="block text-left font-bold text-xxs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl">Frontend</span>
                        <div className="flex space-x-2 md:space-x-8 lg:space-x-16 justify-center">
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <RiHtml5Fill size={iconsSize} className="icon glow-icon-on-hover" />
                                HTML5
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <RiCss3Fill size={iconsSize} className="icon glow-icon-on-hover" />
                                CSS
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <RiJavascriptFill size={iconsSize} className="icon glow-icon-on-hover" />
                                JavaScript
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <RiReactjsFill size={iconsSize} className="icon glow-icon-on-hover" />
                                ReactJS
                            </div>
                        </div>
                        <div className="flex space-x-2 md:space-x-8 lg:space-x-16 justify-center mt-2">
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <RiBootstrapFill size={iconsSize} className="icon glow-icon-on-hover" />
                                Bootstrap
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <BiLogoTailwindCss size={iconsSize} className="icon glow-icon-on-hover" />
                                Tailwind
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <BiLogoTypescript size={iconsSize} className="icon glow-icon-on-hover" />
                                TypeScript
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <TbBrandNextjs size={iconsSize} className="icon glow-icon-on-hover" />
                                NextJS
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="block text-left font-bold text-xxs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl">Backend</span>
                        <div className="flex space-x-2 md:space-x-8 lg:space-x-16 justify-center">
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <DiNodejsSmall size={iconsSize} className="icon glow-icon-on-hover"  />
                                NodeJS
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="block text-left font-bold text-xxs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl">Others</span>
                        <div className="flex space-x-2 md:space-x-8 lg:space-x-16 justify-center">
                        <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <BiGitBranch size={iconsSize} className="icon glow-icon-on-hover"  />
                                VC/Git
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiTableau size={iconsSize} className="icon glow-icon-on-hover"  />
                                Tableau
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiJest size={iconsSize} className="icon glow-icon-on-hover"  />
                                Jest
                            </div>
                            <div className="flex flex-col items-center text-xs md:text-sm lg:text-base">
                                <SiMicrosoftexcel size={iconsSize} className="icon glow-icon-on-hover"  />
                                Excel
                            </div>
                        </div>
                    </div>

                </div>
  

        ),
        interests: 'Under Construction',
        credentials: 'Under Construction'
    };

    return (
        <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            {/* Tabs */}
            <div className="flex mb-4 border-b justify-between text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {['education', 'skills', 'interests', 'credentials'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`mr-4 pb-2 ${activeTab === tab ? 'border-b-2 black text-white font-semibold' : 'text-white hover:text-gray-300'}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div>
                {content[activeTab as keyof typeof content]}
            </div>
        </div>
    );
}

export default DSResume;