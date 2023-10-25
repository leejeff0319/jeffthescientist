import React, { useEffect, useState } from 'react';
// import { GiSnakeTotem }from '../assets/images/GiSnakeTotem.png';

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
            <div className='project-body center-content'>
                <div id="cards">
                    <div className='card'>
                        <div className='card-content'></div>
                        <div className="card-image">
                            <i className=""></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className=""></i>
                                <div className="card-info-title">
                                    <h3></h3>
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
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
        </div>
    );
};

export default Projects;