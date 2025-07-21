import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            &copy; {currentYear} Rahul Kalamber. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Kalamberahul" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-kalambe-b1b808158/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;