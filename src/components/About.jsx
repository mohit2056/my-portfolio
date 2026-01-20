import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Award, X, Code, Rocket } from "lucide-react";
import sqlCert from "../assets/sql_cert.jpg"; 

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
    <section className="py-32 px-6 flex justify-center flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="max-w-5xl grid md:grid-cols-2 gap-16 items-center p-12 rounded-[3rem] backdrop-blur-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl"
      >
        {/* ... (Left side content like About text, badges remains the same) ... */}
        <div>
            <h3 className="text-5xl font-black mb-8 flex items-center gap-4 text-slate-900 dark:text-white">
                <User className="text-blue-600" size={40} /> About
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-xl leading-relaxed mb-8">
                I'm a digital architect specializing in building high-performance web applications and data management systems.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
                {certificates.map((cert, i) => (
                <button 
                    key={i}
                    onClick={() => setSelectedImg(cert)}
                    className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
                >
                    <Award size={20} /> View Credentials
                </button>
                ))}
            </div>
        </div>

        {/* ... (Right side profile image remains the same) ... */}
        <div className="relative group">
           <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-10"></div>
           <img src="https://images.unsplash.com" alt="Profile" className="relative rounded-[2.5rem] border border-slate-200 dark:border-white/20 shadow-2xl" />
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
              // 👇 यहाँ बदलाव किया है: max-w-2xl (medium size) और padding p-4
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
              <div className="p-4 text-center text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                {selectedImg.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
