// FILE: src/components/sections/Hero.jsx
// PASTE THIS CODE INTO YOUR Hero.jsx FILE

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Animates children one after the other
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          variants={itemVariants}
        >
          Rahul Kalambe
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-2xl text-gray-300 font-light"
          variants={itemVariants}
        >
          Full-Stack Java & MERN Developer | Crafting Digital Experiences
        </motion.p>

        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-gray-400"
          variants={itemVariants}
        >
          I build robust, scalable, and user-friendly web applications. From complex backend logic with Spring Boot to dynamic user interfaces with React, I bring ideas to life.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="mt-8 flex justify-center space-x-6"
          variants={itemVariants}
        >
          <a href="https://github.com/Kalamberahul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/rahul-kalambe-b1b808158/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedin size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
