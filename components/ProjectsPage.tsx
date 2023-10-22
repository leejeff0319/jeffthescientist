// ProjectsPage.tsx

import React from 'react';

type ProjectsPageProps = {

};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ }) => {
    return (
        <>
            <div className="flex ml-6 mr-1">
                <div className="flex-none w-1/5"></div>
                <div className="flex-grow w-4/5 bg-blue-100 pb-10 rounded-md mt-10">
                    <div className='center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl text-blue-500' ><strong>Projects</strong></div>
                    {/* <RSNotes />  */}
                    HI
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;
