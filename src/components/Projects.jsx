import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Cosmic Universe",
    desc: "A 3D exploration of our galaxy using Three.js and React.",
    tech: ["React", "Three.js", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com",
  },
  {
    title: "AI Nebula",
    desc: "SaaS platform for generating cosmic art using AI models.",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com",
  },
  {
    title: "Space Station Dashboard",
    desc: "Real-time monitoring system for satellite data and space debris.",
    tech: ["React", "Chart.js", "Firebase"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-16">
        <Layers className="text-blue-500" size={36} />
        {/* Title color fixed for Light Mode */}
        <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">My Creations</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            // Card styling updated for Light Mode visibility
            className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
          >
            <div className="relative h-60 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.7 }}
                src={project.image} 
                className="w-full h-full object-cover grayscale-'30' group-hover:grayscale-0 transition-all"
              />
              {/* Overlay adjusted for light mode */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 dark:from-[#0c0d13] via-transparent to-transparent" />
            </div>

            <div className="p-8">
              {/* Heading and Description colors fixed */}
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-[10px] font-black rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.1 }} href={project.link} className="flex items-center gap-2 text-xs font-bold text-white bg-blue-600 px-4 py-2 rounded-xl shadow-lg shadow-blue-600/20">
                  <ExternalLink size={14} /> Demo
                </motion.a>
                {/* Github link color fixed for Light Mode */}
                <motion.a whileHover={{ scale: 1.1 }} href={project.github} className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
                  <Github size={16} /> Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
