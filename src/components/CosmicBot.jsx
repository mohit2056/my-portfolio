import Lottie from "lottie-react";
import { motion } from "framer-motion";
import astronautData from "../assets/astronaut.json"; 

export const CosmicBot = () => {
  return (
    <motion.div
      className="fixed z-50 w-32 h-32 pointer-events-none bottom-10"
      initial={{ x: "-10vw" }} 
      animate={{ 

        x: ["-10vw", "100vw"],
        y: [0, -30, 0], 
        rotateY: [0, 0, 180, 180, 0] 
      }}
      transition={{ 
        x: {
          duration: 35, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear" 
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotateY: {
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "stepEnd" 
        }
      }}
    >
      <Lottie animationData={astronautData} loop={true} />
    </motion.div>
  );
};
