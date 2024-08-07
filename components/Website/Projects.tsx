import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { GiSnakeTotem }from '../assets/images/GiSnakeTotem.png';
import { TbSortAscendingNumbers } from 'react-icons/tb';
import { SiTensorflow } from 'react-icons/si';
import { MdScience } from "react-icons/md";
import { TbBrandNextjs } from 'react-icons/tb';
import { CiBowlNoodles } from "react-icons/ci";
import { VscGraphLine } from "react-icons/vsc";
import { TbHandClick } from "react-icons/tb";

type ProjectsProps = {
    isDarkTheme: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ isDarkTheme }) => {
    const borderColor = 'rgba(254, 240, 138, 1)';
    const hoverBefore = 'rgba(254, 240, 138, 0.5)';
    const hoverAfter = 'rgba(254, 240, 138, 0.8)';
    const cardColor = 'rgb(191 219 254)';
    const cardI = 'rgb(59, 130, 246)';
    const cardTitle = 'rgba(59, 130, 246 0.5)';

    const projectBody = document.querySelector('.project-body') as HTMLElement;
    const [isTrackpad, setIsTrackpad] = useState<boolean>(false);

    // Detect Trackpad
    useEffect(() => {
        const handler = (e: any) => {
            const isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0;
            setIsTrackpad(isTouchPad);
        };

        document.addEventListener("mousewheel", handler, false);
        document.addEventListener("DOMMouseScroll", handler, false);

        return () => {
            document.removeEventListener("mousewheel", handler, false);
            document.removeEventListener("DOMMouseScroll", handler, false);
        };
    }, []);

    // Horizontal Scroll on Mousewheel
    useEffect(() => {
        if (isTrackpad) return;  // Exit early if isTrackpad is true

        const projectBody = document.querySelector('.project-body');

        if (projectBody) {
            const handleWheel = (e: WheelEvent) => {
                if (e.deltaY !== 0) {
                    const scrollAmount = e.deltaY * 7;
                    (e.currentTarget as Element).scrollLeft += scrollAmount;
                    e.preventDefault();
                }
            };

            projectBody.addEventListener('wheel', handleWheel as EventListener);

            // Clean up the event listener when the component is unmounted
            return () => {
                projectBody.removeEventListener('wheel', handleWheel as EventListener);
            };
        }
    }, [isTrackpad]);  // Note: isTrackpad is added to the dependency array


    // Drag to Scroll
    if (projectBody) {
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        projectBody.addEventListener('mousedown', (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX - projectBody.offsetLeft;
            scrollLeft = projectBody.scrollLeft;
        });

        projectBody.addEventListener('mouseleave', () => {
            isDown = false;
        });

        projectBody.addEventListener('mouseup', () => {
            isDown = false;
        });

        projectBody.addEventListener('mousemove', (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectBody.offsetLeft;
            const walk = (x - startX);
            projectBody.scrollLeft = scrollLeft - walk;
        });

        projectBody.addEventListener('wheel', (e: WheelEvent) => {
            const scrollAmount = e.deltaY * 10;
            projectBody.scrollLeft += scrollAmount;
            e.preventDefault();
        });
    }

    // Mouse move effect
    useEffect(() => {
        const cardsElement = document.getElementById("cards");
        if (!cardsElement) return;

        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.getElementsByClassName("card");

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i] as HTMLElement;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        cardsElement.onmousemove = handleMouseMove;

        return () => {  // Cleanup function
            cardsElement.onmousemove = null;
        };
    }, []);

    useEffect(() => {
        if (!isDarkTheme) {
            document.documentElement.style.setProperty('--border-color', borderColor);
            document.documentElement.style.setProperty('--hover-before', hoverBefore);
            document.documentElement.style.setProperty('--hover-after', hoverAfter);
            document.documentElement.style.setProperty('--card-color', cardColor);
            document.documentElement.style.setProperty('--card-i', cardI);
            document.documentElement.style.setProperty('--card-title', cardTitle);
        } else {
            // Optionally, set other values or reset to defaults if not dark theme
            document.documentElement.style.setProperty('--border-color', 'defaultBorderColorValue');
            document.documentElement.style.setProperty('--hover-before', 'rgba(255, 255, 255, 0.06)');
            document.documentElement.style.setProperty('--hover-after', 'rgba(255, 255, 255, 0.4)');
            document.documentElement.style.setProperty('--card-color', 'rgb(23, 23, 23)');
            document.documentElement.style.setProperty('--card-i', 'rgb(240, 240, 240)');
            document.documentElement.style.setProperty('--card-title', 'rgba(255, 255, 255, 0.5)');
        }
    }, [isDarkTheme, borderColor, hoverBefore, hoverAfter]);

    return (
        <div>
            <div className=' project-body '>
                <div id="cards">
                    <Link
                        href="https://github.com/leejeff0319/jeffthescientist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card">
                        <div className='card-content'>
                            <span><TbHandClick size={25}/></span>
                            <div className="card-image">
                                <i className=""> <MdScience/></i>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <i className=""> <TbBrandNextjs/></i>
                                    <div className="card-info-title" >
                                        <h3>Jeff The Scientist</h3>
                                        <h4>Github repository of the journey. I documented the processes I went through during the 3 month period.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/MNIST_TFJS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card">
                        <div className='card-content'>
                            <span><TbHandClick size={25}/></span>
                            <div className="card-image">
                                <i className=""> <TbSortAscendingNumbers/></i>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <i className=""> <SiTensorflow/></i>
                                    <div className="card-info-title" >
                                        <h3>MNIST_TFJS</h3>
                                        <h4>Handwritten Digit Recognizer built using CNN model! Will it recognize your handwriting? Let&apos;s find out!
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                    <Link
                        href="https://github.com/leejeff0319/Restaurant_Promotional_Event"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card">
                        <div className='card-content'>
                            <span><TbHandClick size={25}/></span>
                            <div className="card-image">
                                <i className=""> <CiBowlNoodles/></i>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <i className=""> <VscGraphLine/></i>
                                    <div className="card-info-title" >
                                        <h3>Restaurant Promotion</h3>
                                        <h4>Brief data analytics project with my brother. We proposed an idea and performed simple data analytics to measure its impact.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                    <div className='card'>
                        <div className='card-content'></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;