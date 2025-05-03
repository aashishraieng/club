
import {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { JoinDialog } from "@/components/JoinDialog";

export function Hero() {
  const imageList = ["./slide-2.png", "./slide-3.png"];
  const [currentPic, setCurrentPic] = useState(0);
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
  useEffect(() => {
    setTimeout(() => {
      setCurrentPic((currentPic + 1) % imageList.length);
    }, 5500)
  }, [currentPic])
  return (
    <section className="pt-32 pb-24 hero-pattern overflow-hidden" id="header-body-background" style={{
      background: `url(${imageList[currentPic]})`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative" id="carouselExample">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-primary mb-6 relative">
            Welcome to {" "}
            <span className="relative">
              Metaverse
              <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of passionate individuals and be part of something extraordinary.
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <JoinDialog />
            <Button size="lg" variant="outline" className="button-hover" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
            </Button>
          </motion.div> 
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" 
          data-bs-slide="prev" onClick={() => {
            setCurrentPic((currentPic - 1) % imageList.length);
          }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
           data-bs-slide="next" onClick={() => {
            setCurrentPic((currentPic + 1) % imageList.length);
           }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> 
      </div>
    </section>
  );
}
