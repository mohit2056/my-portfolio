import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Award, X } from "lucide-react";
import sqlCert from "../assets/mohit_cert.jpg"; 

const certificates = [
  { 
    title: "Microsoft SQL Certification Training", 
    issuer: "Intellipaat", 
    img: sqlCert 
  },
];

export const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-32 px-6 flex justify-center flex-col items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        className="max-w-6xl grid md:grid-cols-2 gap-16 items-center p-8 md:p-12 rounded-[3rem] backdrop-blur-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl"
      >
        {/* LEFT SIDE: Content */}
        <div className="order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Architecting the Future
            </motion.span>
            
            <h3 className="text-4xl md:text-6xl font-black mb-8 flex items-center gap-4 text-slate-900 dark:text-white tracking-tighter">
                <User className="text-blue-600" size={40} /> About Me
            </h3>
            
            <p className="text-slate-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                I'm a digital architect specializing in building high-performance web applications. My curiosity is my superpower, driving me to blend deep technical logic with creative design.
            </p>

            {/* Badges/Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <h4 className="font-bold text-blue-600">IIT Roorkee</h4>
                    <p className="text-xs text-gray-500">Excellence</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                    <h4 className="font-bold text-purple-600">Full Stack</h4>
                    <p className="text-xs text-gray-500">Development</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                {certificates.map((cert, i) => (
                <button 
                    key={i}
                    onClick={() => setSelectedImg(cert)}
                    className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-600/30 w-full md:w-auto justify-center"
                >
                    <Award size={20} /> View Credentials
                </button>
                ))}
            </div>
        </div>

        {/* RIGHT SIDE: Profile Image (Your New Cosmic Image) */}
        <div className="relative group order-1 md:order-2">
           {/* Background Glow Effect */}
           <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 blur-[80px] opacity-20 group-hover:opacity-40 transition duration-1000"></div>
           
           <motion.div
             whileHover={{ scale: 1.02 }}
             className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl"
           >
             {/* ✅ PUBLIC FOLDER PATH FIXED HERE */}
             <img 
               src="/1769666097954~2.jpg" 
               alt="Mohit's Cosmic Avatar" 
               className="w-full h-auto object-cover"
             />
             {/* Subtle overlay to match theme */}
             <div className="absolute inset-0 bg-linear-to-t from-[#030014]/50 to-transparent"></div>
           </motion.div>
        </div>
      </motion.div>

      {/* --- Certificate Modal (Pop-up) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl bg-black/90"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-2xl w-full bg-white dark:bg-slate-900 p-4 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors z-10"
              >
                <X size={24} />
              </button>
              <img src={selectedImg.img} className="w-full h-auto rounded-2xl" alt="Certificate" />
              <div className="p-4 text-center text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {selectedImg.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
