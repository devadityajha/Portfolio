// src/components/layout/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCodepen,
  FaHeart,
} from "react-icons/fa";
import { SiHashnode, SiDevdotto } from "react-icons/si";

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <FaCodepen />,
      name: "CodePen",
      url: "https://codepen.io/yourusername",
    },
    {
      icon: <SiHashnode />,
      name: "Hashnode",
      url: "https://yourusername.hashnode.dev",
    },
    {
      icon: <SiDevdotto />,
      name: "Dev.to",
      url: "https://dev.to/yourusername",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0"
            variants={footerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-teal-400 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                custom={index}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <p className="flex items-center justify-center md:justify-end">
              {language === "en"
                ? `© ${currentYear} Made with`
                : `© ${currentYear} बनाया गया`}
              <FaHeart className="mx-1 text-red-500 animate-pulse" />
              {language === "en" ? `by Aditya` : `आदित्य द्वारा`}
            </p>
            <p className="text-sm mt-1">
              {language === "en"
                ? "All rights reserved"
                : "सर्वाधिकार सुरक्षित"}
            </p>
          </motion.div>
        </div>

        {/* Easter Egg - Scroll Progress */}
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
