import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./index.css";

// Components Imports - Yahan dhyan dein
import { Meteors } from "./components/Meteors";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact"; // 👈 'lucide-react' se hata kar yahan se import karein
import { Footer } from "./components/Footer";
import { CosmicBot } from "./components/CosmicBot";
import { Reviews } from "./components/Reviews";



export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [showComet, setShowComet] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-700 
      ${theme === "dark" ? "cosmic-bg text-white" : "bg-white text-black"}`}>
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-50" style={{ scaleX }} />

      {/* Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {theme === "dark" && (
          <>
            <div className="absolute inset-0 stars-container opacity-30 animate-twinkle"></div>
            <Meteors number={20} />
          </>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 flex justify-between items-center p-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-2xl font-black tracking-tighter">Cosmic.Dev</h1>
        <button 
          onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero setShowComet={setShowComet} />
        <About />
        <Projects />
        <Timeline/>
        <Skills />
        {/* Ab yahan aapka pura Contact Section dikhega */}
        <Contact />
        <Reviews/>
        <Footer />
        <CosmicBot/>
      </main>

      {/* Easter Egg Comet Effect */}
      {showComet && theme === "dark" && (
        <motion.div 
          initial={{ x: -100, y: 100, opacity: 1 }}
          animate={{ x: 1500, y: -500, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onAnimationComplete={() => setShowComet(false)}
          className="fixed w-1.5 h-1.5 bg-white shadow-[0_0_20px_white] rounded-full z-20"
        />
      )}
    </div>
  );
}
