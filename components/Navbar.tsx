// components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  navbarPosition: string; // Ensure it's named navbarPosition
}

function Navbar({ navbarPosition, onPageChange }: NavbarProps & { onPageChange: (page: string) => void }) {

  return (
    <div className="navbar pb-2 top-0 z-20">
      <nav
        className="navbar-image pb-2 bg-no-repeat transition-all duration-2000 ease-in-out"
        style={{ backgroundPosition: navbarPosition }}
      >
        <ul className="flex justify-center space-x-40">
          <li>
            <a onClick={() => onPageChange('home')} className="text-white hover:text-blue-500 cursor-pointer">Home</a>
          </li>
          <li>
            <a onClick={() => onPageChange('about')} className="text-white hover:text-blue-500 cursor-pointer">About Me</a>
          </li>
          <li>
            <a onClick={() => onPageChange('projects')} className="text-white hover:text-blue-500 cursor-pointer">Projects</a>
          </li>
          <li>
            <a onClick={() => onPageChange('notes')} className="text-white hover:text-blue-500 cursor-pointer">Notes</a>
          </li>
          <li>
            <a onClick={() => onPageChange('certifications')} className="text-white hover:text-blue-500 cursor-pointer">Certifications</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;