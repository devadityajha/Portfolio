// src/components/ui/DarkModeToggle.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className={`relative w-14 h-8 flex items-center rounded-full p-1 ${
        darkMode ? "bg-teal-700" : "bg-gray-300"
      }`}
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        className={`bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center ${
          darkMode ? "text-yellow-400" : "text-gray-700"
        }`}
        animate={{
          x: darkMode ? 26 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        {darkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
