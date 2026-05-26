import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../portfolio';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-16 py-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p className="text-secondary text-[18px] uppercase tracking-wider">{aboutData.sectionLabel}</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{aboutData.sectionTitle}</h2>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {aboutData.bio}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {aboutData.cards.map((title, index) => (
          <motion.div 
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full sm:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col glass-effect">
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
