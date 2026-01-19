import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = ({ setShowComet }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 
          onMouseEnter={() => setShowComet(true)} 
          className="text-6xl md:text-9xl font-black tracking-tighter mb-4 cursor-default select-none"
        >
          I'm <span className="text-blue-500 hover:text-blue-400 transition-colors">Mohit</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
          Full Stack Developer crafting immersive digital universes. 🚀
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          View My Work
        </motion.button>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-gray-500">
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};
