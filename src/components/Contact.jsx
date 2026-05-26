import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { socialLinks, personalInfo, contactData } from '../portfolio';

const socialItems = [
  { icon: FaGithub, link: socialLinks.github, label: 'GitHub', color: '#fff' },
  { icon: FaLinkedin, link: socialLinks.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaTwitter, link: socialLinks.twitter, label: 'Twitter', color: '#1DA1F2' },
  { icon: FaInstagram, link: socialLinks.instagram, label: 'Instagram', color: '#E4405F' },
  { icon: FaEnvelope, link: `mailto:${socialLinks.email}`, label: 'Email', color: '#00f2fe' },
];


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(contactData.successMessage);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert(contactData.errorMessage);
      }
    } catch (error) {
      console.error(error);
      alert(contactData.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-16 py-20">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center items-start">
        
        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-[0.75] glass-effect p-8 rounded-2xl w-full max-w-2xl">
          <p className="text-secondary text-[18px] uppercase tracking-wider">{contactData.sectionLabel}</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{contactData.sectionTitle}</h3>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{contactData.formLabels.name}</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={contactData.formPlaceholders.name} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#00f2fe] transition-all" required />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{contactData.formLabels.email}</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={contactData.formPlaceholders.email} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#00f2fe] transition-all" required />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{contactData.formLabels.message}</span>
              <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder={contactData.formPlaceholders.message} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#00f2fe] transition-all" required />
            </label>

            <button type="submit" className="bg-[#00f2fe]/20 hover:bg-[#00f2fe]/40 border border-[#00f2fe] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all">
              {loading ? contactData.loadingText : contactData.buttonText}
            </button>
          </form>
        </motion.div>

        {/* Right Side — 3D Animation + Social Links */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-[0.5] flex flex-col items-center gap-8 xl:mt-0"
        >
          {/* Animated Image */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[250px] h-[250px] xl:w-[300px] xl:h-[300px]"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe] to-[#915eff] rounded-full blur-[30px] opacity-40"></div>
            
            <img
              src={personalInfo.avatarImage}
              alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
              className="w-full h-full object-cover rounded-full border-4 border-[#00f2fe]/40 shadow-[0_0_20px_rgba(0,242,254,0.3)] z-10 relative"
            />
          </motion.div>

          {/* Social Icons Row */}
          <div className="flex gap-4 flex-wrap justify-center">
            {socialItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, boxShadow: `0px 0px 25px 0px ${item.color}40` }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-14 h-14 rounded-full glass-effect flex justify-center items-center border border-white/10 cursor-pointer group relative"
                title={item.label}
              >
                <item.icon className="text-2xl text-white/70 group-hover:text-white transition-colors duration-300" />
                {/* Tooltip */}
                <span className="absolute -bottom-8 bg-[#151030] text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Resume Download Button */}
          <motion.a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px 0px #915eff40' }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex items-center gap-3 py-3 px-8 rounded-full border-2 border-[#915eff] bg-[#915eff]/10 hover:bg-[#915eff]/30 transition-all duration-300 cursor-pointer"
            title="Download Resume"
          >
            <FaFileDownload className="text-xl text-[#915eff] group-hover:text-white transition-colors duration-300" />
            <span className="text-[#915eff] font-semibold">Download Resume</span>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
