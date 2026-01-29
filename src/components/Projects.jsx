import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Global Wander",
    desc: "A premium travel booking platform with interactive maps and real-time destination insights. Plan your next adventure seamlessly.",
    tech: ["NEXT.JS", "MAPBOX", "TAILWIND"],
    link: "#",
    github: "#",
    // ✅ Pexels Travel Image (Mountain/Lake View)
    image: "https://images.unsplash.com/photo-1753366739265-73c8565736c9?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI Nebula",
    desc: "SaaS platform for generating cosmic art using AI models. Transform your imagination into stellar masterpieces.",
    tech: ["NEXT.JS", "OPENAI", "POSTGRESQL"],
    link: "#",
    github: "#",
    // ✅ Pexels Tech/AI Image (Neural Network vibe)
    image: "https://plus.unsplash.com/premium_photo-1725985758385-d5462d6e7f50?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Space Station Dashboard",
    desc: "Real-time monitoring system for satellite data and space debris. Keeping the orbital paths safe for exploration.",
    tech: ["REACT", "CHART.JS", "FIREBASE"],
    link: "#",
    github: "#",
    // ✅ Pexels Code/Dashboard Image
    image: "https://plus.unsplash.com/premium_photo-1764702259037-7596e7cef117?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProjectCard = ({ project, index }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0d0d15] border border-slate-200 dark:border-white/5 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl dark:hover:shadow-blue-500/10"
    >
      {/* Dynamic Spotlight (Dark Mode Only) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300 z-10 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-50 dark:from-[#0d0d15] to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="p-8 relative z-20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a href={project.github} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all">
              <Github size={18} />
            </a>
            <a href={project.link} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
          {project.desc}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[9px] font-black px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/10 text-blue-600 dark:text-blue-400/80 uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="text-xs font-bold tracking-[0.5em] text-blue-600 dark:text-blue-400/60 uppercase mb-4">Selected Work</span>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">Featured Projects</h2>
        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
