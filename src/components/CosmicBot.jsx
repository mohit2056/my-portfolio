import Lottie from "lottie-react";
import { motion } from "framer-motion";
import astronautData from "../assets/astronaut.json"; 

export const CosmicBot = () => {
  return (
    <motion.div
      className="fixed z-50 w-28 h-28 md:w-32 md:h-32 pointer-events-none bottom-5"
      animate={{ 
        // 1. Position: -10vw se 90vw jaana aur wapas aana
        x: ["-10vw", "90vw", "90vw", "-10vw", "-10vw"],
        // 2. Rotation: Kone par pahunchte hi mude (0 = Right, 180 = Left)
        rotateY: [0, 0, 180, 180, 0],
      }}
      transition={{ 
        duration: 25, // Poore ek chakkar ka time
        repeat: Infinity, 
        ease: "linear",
        // 'times' ensures ki rotation ekdum kone par hi ho
        times: [0, 0.48, 0.5, 0.98, 1] 
      }}
    >
      <Lottie animationData={astronautData} loop={true} />
    </motion.div>
  );
};
