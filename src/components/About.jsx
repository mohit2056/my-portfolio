import { motion } from "framer-motion";
import { User, Code, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section className="py-32 px-6 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        // Background and Border fixed for Light Mode
        className="max-w-5xl grid md:grid-cols-2 gap-16 items-center p-12 rounded-[3rem] backdrop-blur-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-3xl"
      >
        <div>
          {/* Heading visibility fixed */}
          <h3 className="text-5xl font-black mb-8 flex items-center gap-4 text-slate-900 dark:text-white">
            <User className="text-blue-600 dark:text-blue-500" size={40} /> About
          </h3>
          
          {/* Text color fixed for Light Mode */}
          <p className="text-slate-600 dark:text-gray-300 text-xl leading-relaxed mb-8">
            I'm a digital architect specializing in building high-performance web applications with a focus on <span className="text-blue-600 dark:text-blue-400 font-bold">visual storytelling</span> and user experience.
          </p>
          
          {/* Badges visibility fixed */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm font-bold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10">
              <Code size={18} className="text-blue-600 dark:text-blue-400" /> Developer
            </div>
            <div className="flex items-center gap-2 text-sm font-bold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10">
              <Rocket size={18} className="text-purple-600 dark:text-purple-400" /> Innovator
            </div>
          </div>
        </div>

        {/* Profile Image Area */}
        <div className="relative group">
           {/* Glowing effect adjusted for Light Mode */}
           <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity"></div>
           <img 
            src="https://images.unsplash.com" 
            alt="Profile" 
            className="relative rounded-[2.5rem] border border-slate-200 dark:border-white/20 shadow-2xl grayscale-20 group-hover:grayscale-0 transition-all duration-500" 
           />
        </div>
      </motion.div>
    </section>
  );
};
