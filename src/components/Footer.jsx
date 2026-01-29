import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 text-center space-y-8">
      <div className="flex justify-center gap-10">
        <a href="https://github.com/mohit2056" target="_blank" className="text-gray-400 hover:text-blue-500 hover:scale-125 transition-all"><Github size={38}/></a>
        <a href="https://www.linkedin.com/in/mohit-suroliya-b939a12a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLciX1Ex%2FSyGcEpR2dX6%2BAg%3D%3D" target="_blank" className="text-gray-400 hover:text-blue-500 hover:scale-125 transition-all"><Linkedin size={38}/></a>
        <a href="https://www.instagram.com/imyourmanni2056?igsh=MWdlemVyZzZqcHoxdA==" target="_blank" className="text-gray-400 hover:text-pink-500 hover:scale-125 transition-all"><Instagram size={38}/></a>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-500 flex items-center justify-center gap-2 font-medium">
          Made with <Heart size={25} className="text-red-500 fill-red-500 animate-pulse" /> by Cosmic.Dev
        </p>
        <p className="text-xs text-gray-600 uppercase tracking-widest">© 2026 Mohit Suroliya. All rights reserved.</p>
      </div>
    </footer>
  );
};
