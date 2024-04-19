// ProjectsPage.tsx
import Projects from './Projects';
import React from 'react';

type ProjectsPageProps = {
  isDarkTheme: boolean;
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ isDarkTheme }) => {
  const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
  const textColor = isDarkTheme ? 'text-gray-200' : 'text-blue-500';

  return (
    <div className=" grid grid-cols-12 gap-4 mt-10">
      <div style={{ backgroundColor: bgColor }} className="col-start-4 col-end-11 rounded-md pl-2 pr-2">
        <div className={`center-content mb-5 text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>Projects</strong></div>
        <Projects isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
}

export default ProjectsPage;

