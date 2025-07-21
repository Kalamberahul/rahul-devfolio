import React from 'react';
import { projects } from '../../constants';
import SectionWrapper from '../../hoc/SectionWrapper';
import ProjectCard from '../common/ProjectCard';

const Projects = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white text-center mb-4">
        My Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've worked on. Each one represents a piece of my journey as a developer, showcasing my skills in action.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');