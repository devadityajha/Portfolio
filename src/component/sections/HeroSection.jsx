// ye tha aaj ka default code mein
// // src/components/sections/HeroSection.jsx
// where i am start edit if any problem just uncomment the comment codes
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import ParticlesBackground from "../particles/ParticlesBackground";
import { TypeAnimation } from "react-type-animation";
// import Navbar from "../layout/Navbar";

const HeroSection = ({ language }) => {
  const heroRef = useRef();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background with React Three Fiber */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Particle Overlay */}
      <div className="absolute inset-0 z-10">
        <ParticlesBackground />
        {/* <Navbar /> */}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container flex-col justify-center items-center mx-auto px-6 py-20 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <img src="wpDp.jpeg" className="w-96 h-96 rounded-full" alt="" /> */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          {language === "en"
            ? "Hello, I'm Aditya Jha"
            : "नमस्ते, मेरा नाम आदित्य झा है"}
        </motion.h1>
        <motion.div
          className="text-2xl md:text-4xl font-medium text-teal-300 mb-8 h-16"
          variants={itemVariants}
        >
          <TypeAnimation
            key={language} // 🔁 Force re-render on language switch
            sequence={
              language === "en"
                ? [
                    "Full Stack Developer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Designs That Convert",
                    2000,
                    "Experiences Users Remember",
                    2000,
                  ]
                : [
                    "फुल स्टैक डेवलपर",
                    2000,
                    "समस्या समाधानकर्ता",
                    2000,
                    "उद्देश्यपूर्ण कोड",
                    2000,
                    "अनुभव जो याद रहें",
                    2000,
                  ]
            }
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          className="text-xl text-gray-200 max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          {language === "en"
            ? "I create interfaces that not only look good — but feel right, load fast, and make users stay."
            : "मैं ऐसे इंटरफेस बनाता हूँ जो सिर्फ अच्छे नहीं दिखते — बल्कि तेज़ लोड होते हैं और उपयोगकर्ता को जोड़े रखते हैं।"}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "en" ? "Get in Touch" : "संपर्क करें"}
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-300 rounded-full font-medium hover:bg-teal-900/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "en" ? "View Projects" : "प्रोजेक्ट देखें"}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-teal-400 flex justify-center p-1">
          <motion.div
            className="w-2 h-2 bg-teal-400 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

// src/components/sections/HeroSection.jsx
// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { Stars, OrbitControls } from "@react-three/drei";
// import ParticlesBackground from "../particles/ParticlesBackground";
// import { TypeAnimation } from "react-type-animation";
// import Navbar from "../layout/Navbar";

// import { useContext } from "react";
// import { LanguageContext } from "../../context/LanguageProvider";

// const HeroSection = () => {
//   const { language, isLoaded } = useContext(LanguageContext);
//   if (!isLoaded) {
//     return (
//       <div className="h-screen flex justify-center items-center bg-black text-white text-xl">
//         Loading...
//       </div>
//     );
//   }

//   const heroRef = useRef();

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section
//       ref={heroRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* 3D Background with React Three Fiber */}
//       <div className="absolute inset-0 z-0">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <Stars radius={100} depth={50} count={5000} factor={4} />
//           <OrbitControls
//             enableZoom={false}
//             enablePan={false}
//             autoRotate
//             autoRotateSpeed={0.5}
//           />
//         </Canvas>
//       </div>

//       {/* Particle Overlay */}
//       <div className="absolute inset-0 z-10">
//         <ParticlesBackground />
//         <Navbar />
//       </div>

//       {/* Content */}
//       <motion.div
//         className="relative z-20 container mx-auto px-6 py-20 text-center"
//         variants={textVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="text-5xl md:text-7xl font-bold text-white mb-4"
//           variants={itemVariants}
//         >
//           {language === "en" ? "Hello, I'm Aditya" : "नमस्ते, मैं आदित्य हूँ"}
//         </motion.h1>

//         <motion.div
//           className="text-2xl md:text-4xl font-medium text-teal-300 mb-8 h-16"
//           variants={itemVariants}
//         >
//           <TypeAnimation
//             sequence={[
//               language === "en" ? "Full Stack Developer" : "फुल स्टैक डेवलपर",
//               2000,
//               language === "en" ? "React Specialist" : "रिएक्ट विशेषज्ञ",
//               2000,
//               language === "en" ? "UI/UX Enthusiast" : "UI/UX उत्साही",
//               2000,
//               language === "en" ? "Problem Solver" : "समस्या समाधानकर्ता",
//               2000,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </motion.div>

//         <motion.p
//           className="text-xl text-gray-200 max-w-2xl mx-auto mb-10"
//           variants={itemVariants}
//         >
//           {language === "en"
//             ? "I craft immersive digital experiences with cutting-edge technology and pixel-perfect precision."
//             : "मैं अत्याधुनिक तकनीक और पिक्सेल-परफेक्ट परिशुद्धता के साथ आकर्षक डिजिटल अनुभव बनाता हूं।"}
//         </motion.p>

//         <motion.div
//           className="flex justify-center gap-4"
//           variants={itemVariants}
//         >
//           <motion.a
//             href="#contact"
//             className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {language === "en" ? "Get in Touch" : "संपर्क करें"}
//           </motion.a>
//           <motion.a
//             href="#projects"
//             className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-300 rounded-full font-medium hover:bg-teal-900/30 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {language === "en" ? "View Projects" : "प्रोजेक्ट देखें"}
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{
//           opacity: [0, 1, 0],
//           y: [0, 10, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         <div className="w-8 h-12 rounded-full border-2 border-teal-400 flex justify-center p-1">
//           <motion.div
//             className="w-2 h-2 bg-teal-400 rounded-full"
//             animate={{ y: [0, 8, 0] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
