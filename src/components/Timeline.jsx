import { motion } from "framer-motion";

const milestones = [
  { year: "2025", title: "Started Journey", desc: "Learning Full Stack Devolepment with IIT Rorkee." },
  { year: "2026", title: "Future Goals", desc: "Exploring Web3 and AI integrations and Wep Devolepment ." },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black mb-16 text-center tracking-tighter">My Journey</h2>
      <div className="relative border-l-2 border-blue-500/30 ml-4">
        {milestones.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            {/* Dot on the line */}
            <div className="absolute -left-10 top-1.5 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
            
            <span className="text-blue-400 font-mono font-bold">{item.year}</span>
            <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
            <p className="text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
