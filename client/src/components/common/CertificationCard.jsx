import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 flex items-center space-x-6 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-300 shadow-md">
      <div className="flex-shrink-0">
        <img 
          src={cert.logo} 
          alt={`${cert.issuer} logo`} 
          className="h-16 w-16 rounded-full object-contain bg-white p-1"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/ffffff/94a3b8?text=Logo'; }}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg">{cert.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{cert.date}</p>
      </div>
      {cert.credential_url && cert.credential_url !== '#' && (
        <div className="flex-shrink-0">
          <a
            href={cert.credential_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <FaCertificate />
            <span>View</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;