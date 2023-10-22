import React from 'react';

type ProjectsProps = {
    isDarkTheme: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ isDarkTheme }) => {
    const bgColorClass = isDarkTheme ? 'bg-gray-500' : 'bg-blue-300';

    return (

        <div className='grid grid-cols-2 gap-4'>
            <div className={`${bgColorClass} p-5 rounded-md`}> {/*add project description under*/}
                <div className="hero-projects">
                    <img className="logo" src="" alt="" />
                    <img className="front-image" src="p4e_fi.png" alt="" />
                    <img className="bg-certs" src="profile.jpg" alt="" />
                </div>
            </div>

            <div className={`${bgColorClass} p-5 rounded-md`}> {/*add project description under*/}
                <div className="hero-projects">
                    <img className="logo" src="" alt="" />
                    <img className="front-image" src="" alt="" width='' />
                    <img className="bg-certs" src="" alt="" />
                </div>
            </div>

            <div className={`${bgColorClass} p-5 rounded-md`}> {/*add project description under*/}
                <div className="hero-projects">
                    <img className="logo" src="" alt="" />
                    <img className="front-image" src="" alt="" />
                    <img className="bg-certs" src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Projects;