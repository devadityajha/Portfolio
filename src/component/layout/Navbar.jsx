// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: language === "en" ? "Home" : "होम", to: "home" },
    { name: language === "en" ? "Projects" : "प्रोजेक्ट्स", to: "projects" },
    { name: language === "en" ? "Experience" : "अनुभव", to: "experience" },
    { name: language === "en" ? "Skills" : "कौशल", to: "skills" },
    { name: language === "en" ? "Contact" : "संपर्क", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden md:flex fixed w-full z-50 py-3 px-6 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center  ">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-3xl font-bold text-teal-600 dark:text-teal-400 cursor-pointer"
          >
            AJ
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <ul className="flex font-extrabold gap-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.to}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer font-medium transition-colors relative group"
                    activeClass="text-teal-600 dark:text-teal-400"
                    spy={true}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full  
             bg-gray-200 dark:bg-gray-700 
             text-yellow-500 dark:text-yellow-300 
             hover:bg-yellow-100 dark:hover:bg-yellow-600 
             shadow-md transition-all duration-200"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-800" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-1 rounded-md text-sm font-semibold 
             bg-gray-200 dark:bg-gray-700 
             text-gray-800 dark:text-gray-100 
             hover:bg-teal-100 dark:hover:bg-teal-600 
             transition-all duration-200"
            >
              {language === "en" ? "EN" : "HI"}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className={`md:hidden fixed w-full z-50 py-3 px-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-teal-600 dark:text-teal-400 cursor-pointer"
          >
            AJ
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 dark:text-gray-300 p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-white dark:bg-gray-900 pt-20 px-6 z-40"
            >
              <div className="flex flex-col h-full">
                <ul className="space-y-6 py-8">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu}
                        className="block text-2xl font-medium text-gray-800 dark:text-gray-200 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        activeClass="text-teal-600 dark:text-teal-400"
                        spy={true}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto pb-12 flex justify-center gap-10">
                  <motion.button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      toggleMenu();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    aria-label={
                      darkMode ? "Switch to light mode" : "Switch to dark mode"
                    }
                  >
                    {darkMode ? (
                      <FaSun className="w-6 h-6" />
                    ) : (
                      <FaMoon className="w-6 h-6" />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      toggleLanguage();
                      toggleMenu();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium"
                  >
                    {language === "en"
                      ? "Switch to Hindi"
                      : "अंग्रेज़ी पर स्विच करें"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
