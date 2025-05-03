
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { JoinDialog } from "@/components/JoinDialog";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-32 pb-24 hero-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center relative"
        >
          <motion.div
            variants={itemVariants}
            className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          />
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            style={{ animationDelay: "2s" }}
          />
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 relative"
          >
            Welcome to{" "}
            <span className="relative">
              Metaverse
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Join our community of passionate individuals and be part of something extraordinary.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <JoinDialog />
            <Button 
              size="lg" 
              variant="outline"
              className="button-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
