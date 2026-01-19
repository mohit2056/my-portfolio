import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

const skillsData = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind", level: 95, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git", level: 85, category: "tools" },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-12">
        <Cpu className="text-blue-500" size={36} />
        <h2 className="text-5xl font-black tracking-tighter">Technical Arsenal</h2>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-16">
        {["all", "frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-bold capitalize transition-all border 
              ${activeTab === tab 
                ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex justify-between mb-4">
                <span className="text-xl font-bold">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-linear-to-r from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
