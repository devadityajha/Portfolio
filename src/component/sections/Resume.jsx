// src/components/sections/Resume.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { FiAward, FiBook, FiCode } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF"; // We'll create this next

const Resume = ({ language }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const education = [
    {
      id: 1,
      degree:
        language === "en"
          ? "B.Tech in Biomedical Engineering"
          : "बायोमेडिकल इंजीनियरिंग में बी.टेक",
      institution:
        "Deenbandhu Chhotu Ram University Of Science And Technology, Murthal (Haryana)",
      year: "2020 - 2023",
      description:
        language === "en"
          ? "Focused on medical technologies and human-centered innovation"
          : "चिकित्सा तकनीकों और मानव-केंद्रित नवाचार पर ध्यान केंद्रित",
    },
    {
      id: 2,
      degree:
        language === "en"
          ? "Diploma in Medical Electronics"
          : "मेडिकल इलेक्ट्रॉनिक्स में डिप्लोमा",
      institution:
        "C.R.R.I.T (Chhotu Ram Rural Institute of Technology), Delhi",
      year: "2016 - 2019",
      description:
        language === "en"
          ? "Hands-on learning in biomedical circuits, diagnostics, and devices"
          : "बायोमेडिकल सर्किट, डायग्नोस्टिक्स और उपकरणों में व्यावहारिक ज्ञान",
    },
    {
      id: 3,
      degree: language === "en" ? "10th - CBSE" : "10वीं - सीबीएसई",
      institution: "S.D. Public School, Delhi",
      year: "2006 - 2016",
      description:
        language === "en"
          ? "Completed schooling with strong academic foundation"
          : "मजबूत अकादमिक नींव के साथ स्कूली शिक्षा पूरी की",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: language === "en" ? "MERN Stack Developer" : "मर्न स्टैक डेवलपर",
      issuer: "Dice Academy, Hauzkhas New Delhi",
      year: "2024 - 2025",
      // link: "https://aws.amazon.com/certification",
    },
  ];

  const skills = [
    {
      category: language === "en" ? "Frontend" : "फ्रंटएंड",
      items: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    },
    {
      category: language === "en" ? "Backend" : "बैकएंड",
      items: ["Node.js", "Express", "GraphQL", "MongoDB"],
    },
    {
      category: language === "en" ? "Dev Tools" : "देव उपकरण",
      items: ["Git", "GitHub", "Postman", "Vs Code"],
    },
  ];

  return (
    <section id="resume" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === "en" ? "My Resume" : "मेरा रिज्यूम"}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-2" />
        </motion.div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          {/* Resume Header */}
          <div className="bg-teal-600 text-white p-6 text-center">
            <h3 className="text-2xl font-bold">
              {" "}
              {language == "en" ? "Aditya Jha" : "आदित्य झा"}
            </h3>
            <p className="opacity-90">
              {language === "en"
                ? "Senior Full Stack Developer"
                : "सीनियर फुल स्टैक डेवलपर"}
            </p>

            <div className="flex justify-center mt-4 gap-4">
              <motion.button
                onClick={handlePrint}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg text-sm font-medium"
              >
                <FaDownload />{" "}
                {language === "en" ? "Print Resume" : "रिज्यूम प्रिंट करें"}
              </motion.button>

              <PDFDownloadLink
                document={
                  <ResumePDF
                    education={education}
                    certifications={certifications}
                    skills={skills}
                    language={language}
                  />
                }
                fileName="Aditya_Jha_Resume.pdf"
              >
                {({ loading }) => (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <FaDownload />{" "}
                    {loading
                      ? language === "en"
                        ? "Loading..."
                        : "लोड हो रहा है..."
                      : language === "en"
                      ? "Download PDF"
                      : "PDF डाउनलोड करें"}
                  </motion.button>
                )}
              </PDFDownloadLink>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6" ref={resumeRef}>
            {/* Education Section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => toggleSection("education")}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiBook className="text-teal-500" />
                  {language === "en" ? "Education" : "शिक्षा"}
                </h4>
                <motion.div
                  animate={{
                    rotate: expandedSection === "education" ? 180 : 0,
                  }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSection === "education" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 pl-8 border-l-2 border-teal-500">
                      {education.map((item) => (
                        <div key={item.id} className="relative">
                          <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900"></div>
                          <h5 className="font-bold text-gray-900 dark:text-white">
                            {item.degree}
                          </h5>
                          <p className="text-teal-600 dark:text-teal-400">
                            {item.institution} • {item.year}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 mt-1">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => toggleSection("certifications")}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiAward className="text-teal-500" />
                  {language === "en" ? "Certifications" : "प्रमाणपत्र"}
                </h4>
                <motion.div
                  animate={{
                    rotate: expandedSection === "certifications" ? 180 : 0,
                  }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSection === "certifications" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pl-8 border-l-2 border-teal-500">
                      {certifications.map((cert) => (
                        <div key={cert.id} className="relative">
                          <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900"></div>
                          <h5 className="font-bold text-gray-900 dark:text-white">
                            {cert.name}
                          </h5>
                          <p className="text-teal-600 dark:text-teal-400">
                            {cert.issuer} • {cert.year}
                          </p>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-teal-600 dark:text-teal-400 hover:underline flex items-center mt-1"
                            >
                              {language === "en"
                                ? "View credential"
                                : "क्रेडेंशियल देखें"}
                              <FaExternalLinkAlt className="ml-1" size={12} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => toggleSection("skills")}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiCode className="text-teal-500" />
                  {language === "en" ? "Skills" : "कौशल"}
                </h4>
                <motion.div
                  animate={{ rotate: expandedSection === "skills" ? 180 : 0 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedSection === "skills" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-8">
                      {skills.map((skillGroup) => (
                        <div
                          key={skillGroup.category}
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                        >
                          <h5 className="font-bold text-teal-600 dark:text-teal-400 mb-2">
                            {skillGroup.category}
                          </h5>
                          <ul className="space-y-1">
                            {skillGroup.items.map((skill) => (
                              <li
                                key={skill}
                                className="text-gray-700 dark:text-gray-300"
                              >
                                • {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
