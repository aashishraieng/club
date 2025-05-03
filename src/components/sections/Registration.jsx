import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Registration() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden text-center" 
    style={{background: '#f6f8ff'}}>
      {/* Floating Bubbles */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          🌟 Ready to Join the Metaverse?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 mb-10"
        >
          Join thousands of passionate creators, artists, and techies shaping the future—one event at a time.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now 🚀
          </Button>
      </motion.div>
    </section>
  );
}
