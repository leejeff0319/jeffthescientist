// components/Navbar.tsx
"use client"
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  navbarPosition: string; // Ensure it's named navbarPosition
}

function Navbar({ navbarPosition }: NavbarProps) {


  return (
    <div className="navbar-pages">
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
            href={'/projects'} 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href={'/notes'} 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            Notes
          </Link>
        </li>
        <li>
          <Link 
            href={'/about'} 
            className="text-white hover:text-blue-300 cursor-pointer"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            href={'/Certifications'}
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