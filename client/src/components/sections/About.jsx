import React from 'react';
import SectionWrapper from '../../hoc/SectionWrapper';
import profilePic from '../../assets/images/rahulpicture.jpg';
import { FaJava, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Java & Spring Boot', icon: <FaJava /> },
    { name: 'React & Next.js', icon: <FaReact /> },
    { name: 'Node.js & Express', icon: <FaNodeJs /> },
    { name: 'MongoDB & SQL', icon: <FaDatabase /> },
  ];

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white text-center mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Rahul Kalamber"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-500/50"
          />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Hello! I'm Rahul, a passionate full-stack developer with a love for building elegant and efficient solutions. My journey in tech started with a fascination for how things work, which led me to dive deep into both backend and frontend development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            I specialize in the MERN stack and the robust Java Spring Boot ecosystem, allowing me to create seamless, end-to-end applications. I'm a lifelong learner, always excited to explore new technologies and improve my craft.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                <span className="text-indigo-500 dark:text-indigo-400">{skill.icon}</span>
                <span className="text-slate-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');