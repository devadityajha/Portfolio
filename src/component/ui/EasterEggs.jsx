// src/components/ui/EasterEggs.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const EasterEggs = () => {
  // Console surprise
  useEffect(() => {
    const styles = [
      "color: #fff",
      "background: #0d9488",
      "font-size: 18px",
      "padding: 12px",
      "border-radius: 4px",
      "font-weight: bold",
    ].join(";");

    console.log("%c👋 Hey there, fellow developer!", styles);
    console.log(
      "%cLooking for the source code? Check out my GitHub!",
      "font-size: 14px; color: #0d9488;"
    );
  }, []);

  // Hidden dark mode toggle
  const toggleHiddenDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* Secret Konami code activation */}
      {/* This would require a full implementation, but here's the concept */}

      {/* Footer animation */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 z-50"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Hidden dark mode toggle */}
      <div className="fixed top-4 right-20 opacity-0 hover:opacity-100 transition-opacity">
        <button
          onClick={toggleHiddenDarkMode}
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          Secret Toggle
        </button>
      </div>
    </>
  );
};

export default EasterEggs;
