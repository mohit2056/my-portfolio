import { motion } from "framer-motion";

const milestones = [
  { 
    year: "2025", 
    title: "Started Journey", 
    desc: "Learning Full Stack Development with IIT Roorkee." 
  },
  { 
    year: "2026", 
    title: "Future Goals", 
    desc: "Exploring Web3 and AI integrations and Web Development." 
  },
  {
    year: "2026",
    title: "Generative AI In Full Stack Development",
    desc: "Exploring Web3 and AI integrations and Web Development.",
  },
];

export const Timeline = () => {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      {/* Title fixed for Light/Dark Mode */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-black mb-20 text-center tracking-tighter text-slate-900 dark:text-white"
      >
        My Journey
      </motion.h2>

      <div className="relative border-l-2 border-blue-600/40 dark:border-blue-500/30 ml-6 md:ml-10">
        {milestones.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="mb-16 ml-10 relative"
          >
            {/* Glowing Dot - Fixed for Light Mode contrast */}
            <div className="absolute -left-12.75 top-2 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full shadow-[0_0_15px_#2563eb,0_0_30px_rgba(37,99,235,0.4)]" />
            
            <div className="p-8 rounded-4xl backdrop-blur-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none transition-all hover:border-blue-500/50 group">
              <span className="text-blue-600 dark:text-blue-400 font-mono font-black text-xl tracking-widest">{item.year}</span>
              <h3 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mt-4 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
