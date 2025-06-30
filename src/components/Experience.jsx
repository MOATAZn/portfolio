import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: "Part-Time Front-End Developer",
    company: "Optima Software Solutions",
    period: "Jan 2025 - Present",
    description: [
      "Developed responsive web apps using both Angular and React frameworks.",
      "Integrated front-end applications with RESTful APIs to fetch and display dynamic data.",
      "Gained practical experience in debugging, performance optimization, and cross-browser compatibility."
    ]
  },
  {
    role: "Teaching Assistant",
    company: "6 October University",
    period: "Nov 2024 - Present",
    description: [
      "Assisted professors with course preparation and the development of instructional materials.",
      "Supported students in understanding course concepts through one-on-one guidance.",
      "Contributed to the development of educational resources and assessments.",
    ]
  },
  {
    role: "ITI-Front-End Online Summer Training",
    company: "Information Technology Institute (ITI)",
    period: "Aug 2023 - Sep 2023",
    description: [
      "Gained comprehensive knowledge of HTML, CSS, and JavaScript.",
      "Developed practical skills in responsive web design and UI development.",
      "Worked on real-world projects, applying best practices in coding and design."
    ]
  },
  {
    role: "IT Training (Internship)",
    company: "Midbank",
    period: "Aug 2022 - Sep 2022",
    description: [
      "Developed skills in website maintenance, including basic HTML and CSS modifications.",
      "Gained experience in application support and the deployment of software updates.",
      "Acquired knowledge of IT administration tasks, such as user account management."
    ]
  },
];
// A reusable component for the animated timeline icon, now centered
const TimelineIcon = () => (
    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 mt-0.5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="4" className="fill-current text-teal-500 dark:text-teal-400" />
        </svg>
    </div>
);


// The ExperienceItem now accepts an `index` to determine its side
const ExperienceItem = ({ details, index }) => {
    const isLeft = index % 2 !== 0; // Odd items are on the left

    return (
        <li className="mb-10">
            <div className="flex items-center">
                {/* This wrapper ensures the card is on the correct side */}
                <div className={`flex w-full items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    
                    {/* The card content, with conditional ordering for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className={`p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 w-full md:w-[45%] ${isLeft ? 'md:mr-10' : 'md:ml-10'}`}
                    >
                        <TimelineIcon />
                        <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center mb-2">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 sm:mb-0">
                                {details.role}
                            </h3>
                            <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-sm font-medium px-2.5 py-0.5 rounded">
                                {details.period}
                            </span>
                        </div>
                        <p className="text-md font-semibold text-slate-600 dark:text-slate-400 mb-3">{details.company}</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
                            {details.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </li>
    );
};


export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative  mx-auto ">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>
          
          <ol>
            {experienceData.map((item, index) => (
              <ExperienceItem key={index} details={item} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}