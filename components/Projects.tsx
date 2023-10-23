import React, { useEffect } from 'react';

type ProjectsProps = {
    isDarkTheme: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ isDarkTheme }) => {
    const bgColorClass = isDarkTheme ? 'bg-gray-500' : 'bg-blue-300';

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

    return (
        <div>
            <div className='projects-body center-content'>
                <div id="cards">
                    <div className='card'>
                        <div className='card-content'></div>
                        <div className="card-image">
                            <i className="fa-duotone fa-apartment"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className=""></i>
                                <div className="">
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
                </div>
            </div>
        </div>
    );
};

export default Projects;