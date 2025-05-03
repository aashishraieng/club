
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Mail } from "lucide-react";

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  const boxCard = {height: '20em'}
  return (
    <section className="py-24 features-bg">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="text-center p-6 rounded-lg border feature-card"
            style={boxCard}
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
            <p className="text-gray-600">Join our exciting events and activities throughout the year.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="text-center p-6 rounded-lg border feature-card"
            style={boxCard}
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Connect with like-minded individuals in our growing community.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="text-center p-6 rounded-lg border feature-card"
            style={boxCard}
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-600">Get the latest news and updates about our activities.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
