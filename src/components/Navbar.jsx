import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../portfolio';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 flex items-center py-5 px-6 sm:px-16 transition-all duration-300 ${scrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="#home" className="flex items-center gap-2" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <p className="text-white text-[20px] font-bold cursor-pointer flex text-gradient">
            {personalInfo.firstName} &nbsp; <span className="sm:block hidden">| Portfolio</span>
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav}
              className={`hover:text-white text-[16px] font-medium cursor-pointer transition-colors ${active === nav ? 'text-white' : 'text-secondary'}`}
              onClick={() => setActive(nav)}
            >
              <a href={`#${nav.toLowerCase()}`}>{nav}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
