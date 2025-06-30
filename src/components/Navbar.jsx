import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa'; // 1. Import a new icon


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. State for tracking the active section
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'experience' },
    { href: '#contact', label: 'Contact' },
  ];

  // Effect for handling background change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Effect for tracking the active section on scroll
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Link becomes active when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Function for smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
      <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="flex items-center gap-2  text-xl md:text-2xl font-bold text-slate-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          <FaCode />
          <span>Moataz Ibrahim</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`font-medium transition-colors duration-300 
                ${activeSection === link.href.substring(1)
                  ? 'text-teal-500 dark:text-teal-400' // Active link color
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400' // Inactive link color
                }`
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 dark:text-white text-3xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-800 pb-4 absolute w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-lg transition-colors duration-300
                  ${activeSection === link.href.substring(1)
                    ? 'text-teal-500 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.label}
              </a>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}