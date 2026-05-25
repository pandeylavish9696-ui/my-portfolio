import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../portfolio';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }} initial="hidden" whileInView="show" transition={{ duration: 0.5, delay: index * 0.2 }}>
      <Tilt options={{ max: 25, scale: 1.05, speed: 450 }} className="glass-effect p-5 rounded-2xl sm:w-[360px] w-full relative group">
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00f2fe] transition-colors duration-300" />
        
        <div className="relative w-full h-[230px] rounded-2xl bg-[#100d25] flex justify-center items-center overflow-hidden">
          {image ? (
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/20 to-[#4facfe]/20" />
              <span className="text-secondary text-2xl font-bold opacity-30">{name}</span>
            </>
          )}

          {/* Animated shimmer overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.3, ease: "easeInOut" }}
          />
          
          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            <div onClick={() => window.open(source_code_link, '_blank')} className="w-10 h-10 rounded-full bg-black/50 flex justify-center items-center cursor-pointer hover:bg-white/20 backdrop-blur-sm transition-all">
              <FaGithub className="text-white text-lg" />
            </div>
            <div onClick={() => window.open(live_link, '_blank')} className="w-10 h-10 rounded-full bg-black/50 flex justify-center items-center cursor-pointer hover:bg-white/20 backdrop-blur-sm transition-all">
              <FaExternalLinkAlt className="text-white text-md" />
            </div>
          </div>
        </div>

        <div className="mt-5 relative z-10">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 relative z-10">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-16 py-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p className="text-secondary text-[18px] uppercase tracking-wider">My Work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
