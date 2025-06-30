import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    title: "Watansooq Social Marketplace",
    description:
      "A dynamic B2C/B2B social marketplace application combining social media interaction with targeted advertising, featuring real-time chat, intuitive UI, seamless performance, and visual analytics with ApexCharts.", images: [
        "src/assets/images/WatanSouq/watansouq-1.png",
        "src/assets/images/WatanSouq/watansouq-2.png",
        "src/assets/images/WatanSouq/watansouq-3.png",
      ],
    tags: ["Angular", "PrimeNG", "ApexCharts", "API Integration"],
    liveLink: "https://watansooq.com/home",
    repoLink: "private",
  },
  {
    title: "React & Tailwind Portfolio",
    description:
      "This portfolio itself! A fully responsive, interactive website built from scratch using modern frontend technologies. Features a dark/light mode, smooth animations, and a clean, reusable component structure.",
    images: ["src/assets/images/Portfoilo/project-portfolio.png"],
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "",
    repoLink: "https://github.com/MOATAZn/portfolio.git",
  },
];

const ProjectImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    arrows: images.length > 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative h-56 sm:h-64 w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="h-56 sm:h-64 w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full z-10 hover:bg-black/50"
    >
      <FiChevronRight size={24} />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full z-10 hover:bg-black/50"
    >
      <FiChevronLeft size={24} />
    </button>
  );
};

export default function Projects() {
  const containerVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImageSlider images={project.images} />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-4">

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      <span>Live Demo</span>
                      <FiArrowUpRight />
                    </a>
                  )}


                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300  "
                  >
                    <FiGithub />
                    {project.repoLink == "private" ? <span>private</span> : <span>Source Code</span>}                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
