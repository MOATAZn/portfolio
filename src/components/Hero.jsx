import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Hero() {

 const containerVariants = {
  hidden: { opacity: 0, x: -100, y: -100 }, 
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5, 
      ease: 'easeOut',
      when: 'beforeChildren', 
      staggerChildren: 0.3,   
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};


  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center transition-colors duration-300 
        bg-white dark:bg-[linear-gradient(135deg,_#0f172a,_#334155,_#0f172a)]"
    >
      <div className="container mx-auto px-2 lg:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 overflow-hidden">

        {/* Left Column */}
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >

          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight mb-4"
            variants={item}
          >
            Hi, I'm Moataz Ibrahim — a passionate Frontend Developer crafting interactive, modern web experiences.
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start items-center gap-2 mb-6 text-xl md:text-2xl lg:text-3xl"
          >
            <span className="inline-block">
              <TypeAnimation
                sequence={['Frontend Developer', 2000, 'Angular Developer', 2000, 'React Developer', 2000]}
                wrapper="span"
                speed={40}
                className="font-semibold text-teal-600 dark:text-teal-400"
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p
            className="text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            I specialize in transforming complex ideas into sleek, user-friendly, and high-performance interfaces.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

        </motion.div>

        {/* Right Column */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="relative w-50 h-55 md:w-85 md:h-90 lg:w-130 lg:h-140">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 animate-spin [animation-duration:3s] [animation-direction:alternate]"></div>
            <img
              src="src/assets/images/profile.jpg"
              alt="Profile"
              className="relative w-full h-full object-cover object-[50%_20%] rounded-full border-[8px] border-slate-50 dark:border-slate-900"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
