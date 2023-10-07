// components/Navbar.tsx
"use client"
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  navbarPosition: string; // Ensure it's named navbarPosition
}

function Navbar({ navbarPosition }: NavbarProps) {
  let project_link: string = "rsProjects";
  let notes_link: string = "rsNotes";
  let about_link: string = "rsAbout";
  let certs_link: string = "rsCerts";

  return (
    <div className="navbar-content">
        <nav 
            className="navbar-image bg-no-repeat p-2 sticky top-0 z-20 transition-all duration-2000 ease-in-out"
            style={{ backgroundPosition: navbarPosition }} // Apply here
        >
            <ul className="flex justify-center space-x-40">
        <li>
          <Link 
            href="/" 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link 
            href={project_link} 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href={notes_link} 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            Notes
          </Link>
        </li>
        <li>
          <Link 
            href={about_link} 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            href={certs_link}
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            Certifications
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;