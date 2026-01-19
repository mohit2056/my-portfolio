import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 text-center space-y-8">
      <div className="flex justify-center gap-10">
        <a href="https://github.com/mohit2056" target="_blank" className="text-gray-400 hover:text-blue-500 hover:scale-125 transition-all"><Github size={28}/></a>
        <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-500 hover:scale-125 transition-all"><Linkedin size={28}/></a>
        <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500 hover:scale-125 transition-all"><Instagram size={28}/></a>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-500 flex items-center justify-center gap-2 font-medium">
          Made with <Heart size={18} className="text-red-500 fill-red-500 animate-pulse" /> by Cosmic.Dev
        </p>
        <p className="text-xs text-gray-600 uppercase tracking-widest">© 2026 Mohit Suroliya. All rights reserved.</p>
      </div>
    </footer>
  );
};
