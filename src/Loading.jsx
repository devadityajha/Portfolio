import React from "react";
import { motion } from "framer-motion";

const Loading = () => (
  <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 z-50 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full"
    />
  </div>
);

export default Loading;
