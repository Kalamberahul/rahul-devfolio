// FILE: src/hoc/SectionWrapper.jsx
// This is a Higher-Order Component that wraps our sections to provide animation.

import { motion } from 'framer-motion';

// This function takes a Component and an idName as arguments
const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              type: 'spring',
              duration: 1.25,
            }
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }} // Animate once when 25% of it is in view
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative"
      >
        {/* This span allows us to easily scroll to the section using its id */}
        <span className="absolute -top-20" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
