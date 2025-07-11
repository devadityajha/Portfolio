// src/components/sections/Contact.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Get In Touch" : "संपर्क करें"}
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div custom={0} variants={fieldVariants} className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                {language === "en" ? "Your Name" : "आपका नाम"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </motion.div>

            <motion.div custom={1} variants={fieldVariants} className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                {language === "en" ? "Email Address" : "ईमेल पता"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </motion.div>

            <motion.div custom={2} variants={fieldVariants} className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                {language === "en" ? "Subject" : "विषय"}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </motion.div>

            <motion.div custom={3} variants={fieldVariants} className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                {language === "en" ? "Message" : "संदेश"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all min-h-[150px]"
                required
              >
                {formData.message === "" && (
                  <TypeAnimation
                    sequence={[
                      language === "en"
                        ? "Hi Aditya, I loved your work and want to connect."
                        : "नमस्ते आदित्य, मुझे आपका काम पसंद आया और मैं जुड़ना चाहता हूं।",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={50}
                    className="text-gray-400"
                  />
                )}
              </textarea>
            </motion.div>

            <motion.div custom={4} variants={fieldVariants}>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-block mr-2"
                    >
                      <FaPaperPlane />
                    </motion.span>
                    {language === "en" ? "Sending..." : "भेजा जा रहा है..."}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FaPaperPlane className="mr-2" />
                    {language === "en" ? "Send Message" : "संदेश भेजें"}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
                  >
                    {language === "en"
                      ? "Message sent successfully! I will get back to you soon."
                      : "संदेश सफलतापूर्वक भेजा गया! मैं जल्द ही आपसे संपर्क करूंगा।"}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.form>

          {/* Contact Methods */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 7683053507
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto: jhaaditya2508@gmail.com"
                  className="flex items-center gap-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      jhaaditya2508@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://calendly.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center">
                    <FaCalendarAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {language === "en"
                        ? "Schedule a Meeting"
                        : "मीटिंग शेड्यूल करें"}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Calendly</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "en" ? "Connect With Me" : "मुझसे जुड़ें"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {language === "en"
                  ? "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
                  : "मैं नई परियोजनाओं, रचनात्मक विचारों या आपके विज़न का हिस्सा बनने के अवसरों पर चर्चा करने के लिए हमेशा तैयार हूं।"}
              </p>
              <div className="flex gap-4">
                {["github", "linkedin", "twitter", "dribbble"].map(
                  (platform, i) => (
                    <motion.a
                      key={platform}
                      href={`https://${platform}.com/coderbme`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-lg">
                        {platform[0].toUpperCase()}
                      </span>
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
