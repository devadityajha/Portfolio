// src/App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./component/layout/Navbar";
import HeroSection from "./component/sections/HeroSection";
import Resume from "./component/sections/Resume";
import Projects from "./component/sections/Projects";
import Skills from "./component/sections/Skills";
import Experience from "./component/sections/Experience";
import Contact from "./component/sections/Contact";
import Footer from "./component/layout/Footer";
import UIHelpers from "./component/layout/UIHelpers";
import PerformanceStats from "./component/ui/PerformanceStats";
import EasterEggs from "./component/ui/EasterEggs";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  // Theme colors: Premium black theme with teal accents
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <UIHelpers darkMode={darkMode} />
      <PerformanceStats />
      <EasterEggs />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* <HeroSection language={language} /> ye tha aaj ka default code mein */}
        <HeroSection language={language} />
        <Resume language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </motion.main>

      <Footer language={language} />
    </div>
  );
}

export default App;
