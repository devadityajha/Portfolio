// src/components/sections/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

const Skills = ({ language }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const barVariants = (level) => ({
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" },
    },
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Technical Skills" : "तकनीकी कौशल"}
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category) => (
            <motion.div
              key={category.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
              variants={item}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3 text-teal-500">{category.icon}</span>
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-teal-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-teal-600 h-2.5 rounded-full"
                        variants={barVariants(skill.level)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
