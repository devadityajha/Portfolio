// src/components/sections/Experience.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";

const Experience = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "HCP Travels",
      role: language === "en" ? "Backend Developer" : "बैकएंड डेवलपर",
      period: "May 2025 - Present",
      description:
        language === "en"
          ? "Developing the full-stack HCP Travels platform, implementing secure JWT-based login and dynamic travel APIs, while optimizing UI with React.js and Tailwind CSS for a seamless user experience."
          : "पूर्ण-स्टैक एचसीपी ट्रैवल्स प्लेटफॉर्म का विकास करना, सुरक्षित जेडब्ल्यूटी-आधारित लॉगिन और गतिशील यात्रा एपीआई को लागू करना, जबकि निर्बाध उपयोगकर्ता अनुभव के लिए रिएक्ट.जेएस और टेलविंड सीएसएस के साथ यूआई को अनुकूलित करना।",
      responsibilities:
        language === "en"
          ? [
              "Architected and implemented modular Express.js routes for scalable API structure across user authentication and travel packages.",
              "Improved Website performance by 40% through code optimization",
              "Maintained clean codebase with Git and collaborated using GitHub for version control.",
              "Managed APIs for tours, bookings, and user data with a scalable backend in Node.js and MongoDB.",
            ]
          : [
              "यूज़र ऑथेंटिकेशन और टूर पैकेज के लिए स्केलेबल API स्ट्रक्चर हेतु मॉड्यूलर Express.js रूट्स को डिज़ाइन और इम्प्लीमेंट किया।",
              "कोड ऑप्टिमाइज़ेशन के माध्यम से वेबसाइट की परफॉर्मेंस को 40% तक बेहतर किया।",
              "Git का उपयोग करके कोडबेस को साफ़ और व्यवस्थित बनाए रखा और GitHub पर टीम के साथ सहयोग किया।",
              "Node.js और MongoDB का उपयोग करके टूर, बुकिंग और यूज़र डेटा के लिए स्केलेबल APIs को मैनेज किया।",
            ],

      tech: ["React", "Express", "Next.js", "MongoDb", "Tailwind CSS"],
      teamSize: 15,
      link: "https://www.hcptravel.com/",
    },
    {
      id: 2,
      company: "Bringmark Pvt Ltd.",
      role: language === "en" ? "Full Stack Developer" : "पूर्ण स्टैक डेवलपर",
      period: "Jan 2025 - 2025 May  ",
      description:
        language === "en"
          ? "Contributed to frontend development using React.js and Tailwind CSS, while supporting Meta Ads SEO and content strategy to boost brand visibility and growth."
          : "React.js और Tailwind CSS से फ्रंटएंड डेवलपमेंट किया और मेटा विज्ञापन SEO व कंटेंट स्ट्रैटेजी के ज़रिए ब्रांड ग्रोथ में योगदान दिया।",
      responsibilities:
        language === "en"
          ? [
              "Designed and developed responsive front-end components for the company website using React.js and Tailwind CSS.",
              "Contributed to digital marketing strategies including SEO optimization, content design, and analytics tracking.",
              "Collaborated with design and marketing teams to ensure consistent brand messaging across web and social platforms.",
              "Managed landing pages and performance tracking using tools like Google Analytics and Meta Ads Manager.",
            ]
          : [
              "React.js और Tailwind CSS का उपयोग करके कंपनी वेबसाइट के लिए रिस्पॉन्सिव फ्रंटएंड कम्पोनेंट्स को डिज़ाइन और डेवलप किया।",
              "SEO ऑप्टिमाइज़ेशन, कंटेंट डिज़ाइन और एनालिटिक्स ट्रैकिंग जैसी डिजिटल मार्केटिंग स्ट्रैटेजीज़ में योगदान दिया।",
              "डिज़ाइन और मार्केटिंग टीम के साथ मिलकर वेबसाइट और सोशल मीडिया पर एक जैसी ब्रांड इमेज बनाए रखने का कार्य किया।",
              "Google Analytics और Meta Ads Manager जैसे टूल्स से लैंडिंग पेज और परफॉर्मेंस ट्रैकिंग को मैनेज किया।",
            ],
      tech: ["React", "Express", "Three.js", "Next.Js", "MetaAds"],
      teamSize: 5,
      link: "https://www.bringmark.com/",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === "en" ? "Professional Experience" : "पेशेवर अनुभव"}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-2" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`mb-8 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 bg-teal-500 border-4 border-white dark:border-gray-900 rounded-full w-6 h-6 transform -translate-x-1/2" />

              {/* Content */}
              <div
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400">
                        {exp.role}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <FaBriefcase className="text-gray-400 mt-1" />
                  </div>

                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown className="text-gray-400" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          {language === "en"
                            ? "Key Responsibilities:"
                            : "मुख्य जिम्मेदारियाँ:"}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap justify-between items-center">
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {language === "en"
                                ? "Team size:"
                                : "टीम का आकार:"}{" "}
                              <span className="font-medium">
                                {exp.teamSize}
                              </span>
                            </span>
                          </div>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-teal-600 dark:text-teal-400 hover:underline flex items-center"
                            >
                              {language === "en"
                                ? "Visit website"
                                : "वेबसाइट देखें"}
                              <FaExternalLinkAlt className="ml-1" size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
