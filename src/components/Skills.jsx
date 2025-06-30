import React from 'react';
import { motion } from 'framer-motion';
// --- Icons have been added to this line ---
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaFigma, FaDocker, FaAngular, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

// Backend category has been removed.
const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 size={48} className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={48} className="text-blue-600" /> },
      { name: 'Bootstrap', icon: <FaBootstrap size={48} className="text-purple-600" /> }, // <-- Bootstrap Added
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="text-cyan-400" /> },
      { name: 'JavaScript', icon: <FaJsSquare size={48} className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript size={48} className="text-blue-500" /> },
      { name: 'React', icon: <FaReact size={48} className="text-sky-500" /> },
      { name: 'Angular', icon: <FaAngular size={48} className="text-red-600" /> }, // <-- Angular Added
    ]
  },
  {
    category: 'Tools & Design',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt size={48} className="text-red-500" /> },
      { name: 'Docker', icon: <FaDocker size={48} className="text-blue-500" /> },
      { name: 'Figma', icon: <FaFigma size={48} className="text-pink-500" /> },
    ]
  }
];

const listVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark-2">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
           Skills
        </motion.h2>

        <div className="space-y-16">
          {skillsData.map((categoryItem) => (
            <div key={categoryItem.category}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-teal-600 dark:text-teal-400">
                {categoryItem.category}
              </h3>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {categoryItem.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl hover:shadow-teal-400/20 dark:hover:shadow-teal-500/30 transition-shadow duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }} 
                      transition={{
                        duration: 2 + Math.random() * 3, 
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-200 text-center">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}