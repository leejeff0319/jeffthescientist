// components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  isActivated: boolean;
}

function Navbar({ isActivated , onPageChange }: NavbarProps & { onPageChange: (page: string) => void }) {
  const navbarPosition = isActivated ? '85%' : '0%';

  return (
    <div className="navbar pb-2 top-0 z-20 w-full">
      <nav
        className="navbar-image pb-2 bg-no-repeat transition-all duration-2000 ease-in-out"
        style={{ backgroundPosition: navbarPosition }}
      >
        <ul className="flex justify-center space-x-4 sm:space-x-10 md:space-x-20 lg:space-x-40 xl:space-x-52">
          <li>
            <a onClick={() => onPageChange('projects')} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-blue-500 cursor-pointer">Projects</a>
          </li>
          <li>
            <a onClick={() => onPageChange('about')} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-blue-500 cursor-pointer">About Me</a>
          </li>
          <li>
            <a onClick={() => onPageChange('home')} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-blue-500 cursor-pointer">Resume</a>
          </li>
          <li>
            <a onClick={() => onPageChange('notes')} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-blue-500 cursor-pointer">Notes</a>
          </li>
          <li>
            <a onClick={() => onPageChange('certifications')} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-blue-500 cursor-pointer">Certifications</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;