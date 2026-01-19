import { motion } from "framer-motion";
import { User, Code, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section className="py-32 px-6 flex justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl grid md:grid-cols-2 gap-16 items-center p-12 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 shadow-3xl">
        <div>
          <h3 className="text-5xl font-black mb-8 flex items-center gap-4">
            <User className="text-blue-500" size={40} /> About
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-8">
            I'm a digital architect specializing in building high-performance web applications with a focus on visual storytelling.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm font-bold bg-white/10 px-5 py-2 rounded-full border border-white/10"><Code size={18}/> Developer</div>
            <div className="flex items-center gap-2 text-sm font-bold bg-white/10 px-5 py-2 rounded-full border border-white/10"><Rocket size={18}/> Innovator</div>
          </div>
        </div>
        <div className="relative group">
           <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20"></div>
           <img src="https://via.placeholder.com" alt="Profile" className="relative rounded-4xl border border-white/20 shadow-2xl" />
        </div>
      </motion.div>
    </section>
  );
};
