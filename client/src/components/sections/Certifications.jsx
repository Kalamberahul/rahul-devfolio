import React from 'react';
import { certifications } from '../../constants';
import SectionWrapper from '../../hoc/SectionWrapper';
import CertificationCard from '../common/CertificationCard';

const Certifications = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white text-center mb-4">
        Licenses & Certifications
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        I believe in continuous learning and professional development. Here are some of the certifications I've earned.
      </p>
      <div className="max-w-3xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, 'certifications');