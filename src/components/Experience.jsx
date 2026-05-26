import React from 'react';
import { motion } from 'framer-motion';
import { experiences, experienceData } from '../portfolio';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass-effect p-8 rounded-2xl w-full md:w-[80%] lg:w-[60%] mx-auto mb-8 relative border-l-4 border-[#00f2fe]"
    >
      <div className="absolute -left-[24px] top-8 w-10 h-10 bg-[#050816] border-4 border-[#00f2fe] rounded-full z-10 hidden md:block"></div>
      
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold mt-1">{experience.company_name}</p>
        <p className="text-gradient font-bold mt-2">{experience.date}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 sm:px-16 py-20 relative">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p className="text-secondary text-[18px] uppercase tracking-wider text-center">{experienceData.sectionLabel}</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">{experienceData.sectionTitle}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#211e35] hidden md:block transform -translate-x-1/2"></div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
