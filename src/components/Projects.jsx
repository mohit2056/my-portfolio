import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Cosmic Universe",
    desc: "A 3D exploration of our galaxy using Three.js and React.",
    tech: ["React", "Three.js", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  },
  {
    title: "AI Nebula",
    desc: "SaaS platform for generating cosmic art using AI models.",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1473923377535-0002805f57e8",
  },
  {
    title: "Space Station Dashboard",
    desc: "Real-time monitoring system for satellite data and space debris.",
    tech: ["React", "Chart.js", "Firebase"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-20"
      >
        <Layers className="text-blue-500" size={40} />
        <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
          My Creations
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}

            whileHover={{
              y: -12,
              scale: 1.03,
            }}

            className="
              group relative rounded-[2.5rem] overflow-hidden
              bg-white/80 dark:bg-white/5
              backdrop-blur-xl
              border border-slate-200 dark:border-white/10
              shadow-lg hover:shadow-[0_25px_60px_rgba(0,120,255,0.25)]
              transition-all duration-300 ease-out
              will-change-transform
            "
          >
            {/* IMAGE */}
            <div className="relative h-60 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="relative p-8">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-[10px] font-black rounded-full
                      bg-blue-500/10 text-blue-600 dark:text-blue-400
                      border border-blue-500/20 uppercase tracking-widest
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  className="
                    flex items-center gap-2 text-xs font-bold
                    text-white bg-blue-600 px-5 py-2.5 rounded-xl
                    shadow-md shadow-blue-600/30
                  "
                >
                  <ExternalLink size={14} /> Demo
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="
                    flex items-center gap-2 text-xs font-bold
                    text-slate-500 dark:text-gray-400
                    hover:text-blue-600 dark:hover:text-white transition-colors
                  "
                >
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
