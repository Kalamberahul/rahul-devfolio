// FILE: src/components/layout/Navbar.jsx

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle'; // <-- Import ThemeToggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Certifications', path: '#certifications' },
    { title: 'Resume', path: '#resume' },
    { title: 'Contact', path: '#contact' },
  ];

  const resumeUrl = '/Rahul-Kalambe-Resume.pdf';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/30 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-slate-800 dark:text-white tracking-wider">
              kalamberahul
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  className="text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {/* Download Resume Button - Desktop */}
            <a 
              href={resumeUrl}
              download="Rahul-Kalambe-Resume.pdf"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Download Resume
            </a>
            {/* Theme Toggle Button */}
            <ThemeToggle /> {/* <-- Add the ThemeToggle component here */}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
             <a 
                href={resumeUrl}
                download="Rahul-Kalambe-Resume.pdf"
                className="bg-indigo-600 text-white block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
             >
                Download Resume
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
