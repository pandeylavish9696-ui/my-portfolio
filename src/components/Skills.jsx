import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../portfolio';

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 sm:px-16 py-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p className="text-secondary text-[18px] uppercase tracking-wider">What I know</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">My Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px 0px #00f2fe' }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-32 h-32 rounded-full glass-effect flex flex-col justify-center items-center border-[1px] border-[#00f2fe]/30 cursor-pointer relative group"
          >
            <p className="text-white font-bold text-center">{skill.name}</p>
            {/* Hover overlay for proficiency */}
            <div className="absolute inset-0 rounded-full bg-[#050816]/80 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-gradient font-bold text-xl">{skill.proficiency}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
