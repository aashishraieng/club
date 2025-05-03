
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  const formVariants = {
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

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-24 contact-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={formVariants}
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-white/80 backdrop-blur-sm"
              required
              variants={inputVariants}
              whileFocus="focus"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-white/80 backdrop-blur-sm"
              required
              variants={inputVariants}
              whileFocus="focus"
            />
            <motion.textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-white/80 backdrop-blur-sm"
              required
              variants={inputVariants}
              whileFocus="focus"
            ></motion.textarea>
            <Button 
              type="submit" 
              className="w-full button-hover"
              whileHover={{ scale: 1.02 }}
              whiletap={{ scale: 0.98 }}
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
