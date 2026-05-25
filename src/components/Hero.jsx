import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-center pt-20 px-6 sm:px-16">
      
      {/* Text Content */}
      <div className="z-10 flex-1 flex flex-col justify-center items-start pt-10">
        <h1 className="text-white font-black text-[40px] sm:text-[60px] lg:text-[80px] leading-[1.1] mt-2">
          Hi, I'm <span className="text-gradient">{personalInfo.firstName}</span>
        </h1>
        <p className="text-[#dfd9ff] font-medium text-[16px] sm:text-[20px] lg:text-[24px] mt-4 mb-8 max-w-lg">
          {personalInfo.tagline}
          <br className="sm:block hidden" /> {personalInfo.subtitle}
        </p>
        
        <div className="flex gap-4 flex-wrap items-center">
          <a href="#projects" className="bg-[#915eff] text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-[#915eff] transition-all shadow-card">
            View Projects
          </a>
          <a 
            href={personalInfo.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-8 rounded-full font-semibold border-2 border-[#00f2fe] text-[#00f2fe] hover:bg-[#00f2fe] hover:text-[#050816] transition-all shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:shadow-[0_0_25px_rgba(0,242,254,0.4)]"
          >
            <FaFileDownload className="text-lg" />
            Resume
          </a>
          <a href="#contact" className="glass-effect text-white py-3 px-8 rounded-full font-semibold hover:bg-white/20 transition-all">
            Contact Me
          </a>
        </div>
      </div>

      {/* Animated Image area */}
      <div className="flex-1 h-full w-full flex justify-center items-center absolute md:relative top-0 left-0 opacity-40 md:opacity-100 -z-10 md:z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] lg:w-[400px] lg:h-[550px] rounded-2xl"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#915eff] to-[#00f2fe] rounded-2xl blur-[40px] opacity-40"></div>
          
          <img
            src="/images/avatar2.jpg"
            alt="Lavish Pandey Avatar"
            className="w-full h-full object-cover rounded-2xl border-2 border-[#00f2fe]/30 shadow-card z-10 relative"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
