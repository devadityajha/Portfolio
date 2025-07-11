import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

export default function DevPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        }
      },
      { threshold: 0.5 }
    );
    if (introRef.current) observer.observe(introRef.current);
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
      {/* Landing Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
          alt="bg"
          className="absolute w-full h-full object-cover z-0 opacity-20"
        />
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center"
        >
          <img
            src="YOUR_IMAGE_URL"
            alt="profile"
            className="w-32 h-32 rounded-full mx-auto shadow-xl border-4 border-white mb-6"
          />
          <h1 className="text-5xl font-extrabold">Aditya Jha</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-md mx-auto">
            Full-stack Developer | MERN | Passionate about solving real-world
            problems with clean UI & strong logic
          </p>
          <button
            onClick={toggleDark}
            className="mt-6 px-4 py-2 bg-white text-black font-bold rounded-full hover:scale-105 transform transition"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative group"
            >
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                muted
                autoPlay
                loop
                className="w-full h-56 object-cover group-hover:opacity-100 opacity-0 transition duration-500 absolute top-0 left-0 z-10"
              />
              <img
                src="https://source.unsplash.com/random/400x300"
                alt="project"
                className="w-full h-56 object-cover group-hover:opacity-0 transition duration-500"
              />
              <div className="p-6 z-20 relative">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  Project {id}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-green-600 dark:text-green-400 font-semibold hover:underline"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-black">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {["React", "Node.js", "MongoDB", "Tailwind", "Framer Motion"].map(
            (skill, i) => (
              <motion.div
                key={i}
                whileHover={{ rotateY: 360 }}
                className="bg-white dark:bg-gray-800 p-4 px-6 rounded-lg shadow-xl text-lg font-semibold dark:text-white"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 text-lg">
          I'm a passionate full-stack developer who transitioned from Biomedical
          Engineering into software. I solve real problems with elegant UIs and
          strong backend logic. I love building products that matter.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-200 dark:bg-black text-gray-600 dark:text-white">
        <p>© 2025 Aditya Jha</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://github.com/" className="hover:underline">
            GitHub
          </a>
          <a href="mailto:you@example.com" className="hover:underline">
            Email
          </a>
          <a href="https://linkedin.com" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
