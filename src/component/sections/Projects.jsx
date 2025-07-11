// src/components/sections/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import projects from "../data/projects";

const Projects = ({ language }) => {
  const [activeProject, setActiveProject] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Featured Projects" : "चुनिंदा प्रोजेक्ट्स"}
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveProject(project.id)}
              onHoverEnd={() => setActiveProject(null)}
            >
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  {activeProject === project.id && project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-2 rounded-full hover:bg-teal-600 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-2 rounded-full hover:bg-teal-600 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                {project.video && (
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <FaVideo className="mr-1" /> Hover to play
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">
                      {project.impact.users}
                    </div>
                    <div className="text-xs text-gray-500">
                      {language === "en" ? "Users" : "उपयोगकर्ता"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">
                      {project.impact.performance}%
                    </div>
                    <div className="text-xs text-gray-500">
                      {language === "en" ? "Performance" : "प्रदर्शन"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
