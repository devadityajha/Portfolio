// src/components/ui/PerformanceStats.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PerformanceStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("performance-stats");
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight && position.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Simulate loading performance stats
      const interval = setInterval(() => {
        setStats((prev) => ({
          performance: Math.min(prev.performance + 10, 98),
          accessibility: Math.min(prev.accessibility + 8, 100),
          bestPractices: Math.min(prev.bestPractices + 7, 96),
          seo: Math.min(prev.seo + 9, 94),
        }));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const circleVariants = (value) => ({
    hidden: { pathLength: 0 },
    visible: {
      pathLength: value / 100,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  });

  return (
    <div id="performance-stats" className="fixed bottom-4 left-4 z-50">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#0d9488"
            strokeWidth="8"
            strokeLinecap="round"
            variants={circleVariants(stats.performance)}
            initial="hidden"
            animate="visible"
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dy="7"
            fontSize="20"
            fontWeight="bold"
            fill="#0d9488"
          >
            {stats.performance}
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

export default PerformanceStats;
