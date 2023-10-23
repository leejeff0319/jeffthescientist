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
    <div className="flex ml-6 mr-3">
      <div className="flex-none w-1/5"></div>
      <div style={{ backgroundColor: bgColor }} className={`flex-grow w-4/5 pb-10 rounded-md mt-10`}>
        <div className={`center-content mb-5 text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>Projects</strong></div>
        <Projects isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
}

export default ProjectsPage;

