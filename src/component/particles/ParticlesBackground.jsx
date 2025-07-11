import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaSun, FaMoon } from "react-icons/fa";

const ParticlesBackground = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative">
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#5eead4" },
            links: {
              color: "#5eead4",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Toggle Button */}
      {/* <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/80 dark:bg-black/80 shadow-md transition-colors"
        title="Toggle Dark Mode"
      >
        {darkMode ? (
          <FaSun className="text-pink-400 text-xl" />
        ) : (
          <FaMoon className="text-pink-800 text-xl" />
        )}
      </button> */}
    </div>
  );
};

export default ParticlesBackground;
