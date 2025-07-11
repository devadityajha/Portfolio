// src/components/layout/UIHelpers.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const UIHelpers = ({ darkMode }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Custom cursor effect
  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    // Handle cursor variants
    const hoverables = document.querySelectorAll("a, button, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setCursorVariant("hover"));
      el.addEventListener("mouseleave", () => setCursorVariant("default"));
    });

    // Scroll progress
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / maxScroll) * 100);
      setShowBackToTop(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => setCursorVariant("hover"));
        el.removeEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: darkMode ? "#5eead4" : "#0d9488",
      mixBlendMode: "difference",
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "transparent",
      border: `2px solid ${darkMode ? "#5eead4" : "#0d9488"}`,
      mixBlendMode: "normal",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.1 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-teal-500 z-40"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.3 }}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-teal-600 dark:bg-teal-500 text-white flex items-center justify-center shadow-lg z-40 hover:scale-110"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default UIHelpers;
