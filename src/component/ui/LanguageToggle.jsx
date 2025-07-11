// src/components/ui/LanguageToggle.jsx
import React from "react";
import { motion } from "framer-motion";

const LanguageToggle = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <motion.button
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 p-1 flex items-center"
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      aria-label={language === "en" ? "Switch to Hindi" : "Switch to English"}
    >
      <motion.div
        className={`absolute w-6 h-6 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center ${
          language === "en" ? "left-1" : "left-9"
        }`}
        animate={{
          x: language === "en" ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
      <div className="flex w-full justify-between px-1 z-10">
        <span
          className={`text-xs font-medium ${
            language === "en" ? "text-gray-900" : "text-gray-400"
          }`}
        >
          EN
        </span>
        <span
          className={`text-xs font-medium ${
            language === "hi" ? "text-gray-900" : "text-gray-400"
          }`}
        >
          HI
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
