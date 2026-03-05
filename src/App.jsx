import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./index.css";

// Components Imports
import { Meteors } from "./components/Meteors";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact"; 
import { Footer } from "./components/Footer";
import { CosmicBot } from "./components/CosmicBot";
import { Reviews } from "./components/Reviews";
import { AIChat } from "./components/AIChat";

// Naye Imports: Context aur Toggle Button
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle"; // Agar tune pichla wala save kiya hai

// Maine tere main content ko ek naye component mein daal diya taaki 'useTheme' use kar sakein
function AppContent() {
  const { theme } = useTheme(); // Context se theme la rahe hain
  const [showComet, setShowComet] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-700 
      ${theme === "dark" ? "cosmic-bg text-white" : "bg-white text-slate-900"}`}>
      
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
        
        {/* Naya ThemeToggle component yahan use kiya hai */}
        <ThemeToggle />
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero setShowComet={setShowComet} />
        <About />
        <Projects />
        <Timeline/>
        <Skills />
        <Contact />
        <Reviews/>
        <Footer />
        <CosmicBot/>
        <AIChat/>
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

// Ye tera main App component hai jisme Provider laga hai
export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
