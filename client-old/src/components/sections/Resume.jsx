// FILE: src/components/sections/Resume.jsx

import React from 'react';
import SectionWrapper from '../../hoc/SectionWrapper';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  // This must match the filename in your /public folder exactly
  const resumeUrl = '/Rahul-Kalambe-Resume.pdf';

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-white text-center mb-4">
        My Resume
      </h2>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        Feel free to browse my resume online or download it for your records.
      </p>

      {/* Download Button */}
      <div className="text-center mb-8">
        <a
          href={resumeUrl}
          download="Rahul-Kalambe-Resume.pdf"
          className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <FaDownload />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={`${resumeUrl}#toolbar=0&navpanes=0`}
          title="Rahul Kalambe's Resume"
          className="w-full h-[80vh] md:h-[100vh]"
          frameBorder="0"
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
        </iframe>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, 'resume');
