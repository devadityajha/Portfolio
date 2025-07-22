// src/components/sections/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import freelanceProjects from "../data/freelanceProjects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaVideo,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

const Projects = ({ language }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpanded = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const currentProjects =
    activeTab === "personal" ? projects : freelanceProjects;

  const ProjectCard = ({ project, isFreelance = false }) => {
    const isExpanded = expandedProjects[project.id];
    const shouldShowReadMore = project.description.length > 150;

    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
        {/* Project Type Badge */}
        <div
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
            isFreelance
              ? "bg-purple-500/90 text-white"
              : "bg-cyan-500/90 text-white"
          }`}
        >
          {isFreelance ? "Client Work" : "Personal"}
        </div>

        <div className="relative">
          <div className="h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="absolute top-4 right-4 flex gap-2 z-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-cyan-600 transition-colors duration-300 border border-white/20"
              >
                <FaGithub size={16} />
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-cyan-600 transition-colors duration-300 border border-white/20"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          </div>

          {project.video && (
            <div className="absolute bottom-4 left-4 bg-cyan-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center font-medium">
              <FaVideo className="mr-2" /> Demo Available
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Title and Client Info */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            {isFreelance && project.client && (
              <div className="text-right text-sm">
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  {project.client}
                </div>
                <div className="text-gray-500">{project.year}</div>
              </div>
            )}
          </div>

          {/* Description with Read More */}
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {shouldShowReadMore && !isExpanded
                ? `${project.description.slice(0, 150)}...`
                : project.description}
            </p>

            {shouldShowReadMore && (
              <button
                onClick={() => toggleExpanded(project.id)}
                className={`mt-2 text-sm font-medium ${
                  isFreelance
                    ? "text-purple-600 hover:text-purple-700"
                    : "text-cyan-600 hover:text-cyan-700"
                } transition-colors`}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isFreelance
                    ? "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300"
                    : "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features for Freelance */}
          {isFreelance && project.features && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Key Features
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {project.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact Section for Personal Projects */}
          {!isFreelance && project.impact && (
            <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-xl border-l-4 border-cyan-500">
              <h4 className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-1 flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                Impact & Innovation
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {project.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
            {language === "en" ? "My Work Portfolio" : "मेरा कार्य पोर्टफोलियो"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {language === "en"
              ? "Discover my journey through innovative projects and client collaborations that showcase cutting-edge technology and creative solutions."
              : "अत्याधुनिक तकनीक और रचनात्मक समाधान प्रदर्शित करने वाली नवीन परियोजनाओं के माध्यम से मेरी यात्रा की खोज करें।"}
          </p>

          {/* Simple Tab Navigation - NO ANIMATION ISSUES */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === "personal"
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-cyan-600"
                  }`}
                >
                  <FaCode />
                  <span>Personal Projects</span>
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {projects.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("freelance")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === "freelance"
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-600"
                  }`}
                >
                  <FaBriefcase />
                  <span>Client Work</span>
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {freelanceProjects.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid - NO COMPLEX ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard
              key={`${activeTab}-${project.id}`}
              project={project}
              isFreelance={activeTab === "freelance"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
