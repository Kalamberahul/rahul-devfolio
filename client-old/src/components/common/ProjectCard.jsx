import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', delay: index * 0.2, duration: 0.75 }}
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/50 transition-shadow duration-300 flex flex-col"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex justify-end space-x-4">
        <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
          <FaGithub size={24} />
        </a>
        {project.live_demo_link && (
          <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            <FaExternalLinkAlt size={22} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
