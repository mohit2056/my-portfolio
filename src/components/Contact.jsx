import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, MessageCircle, Linkedin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  // Formspree Submission Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbddoygl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSent(true);
        form.reset();
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message.");
    }
  };

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Left Side: Professional Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tighter mb-8">Let's Connect</h2>
          
          <a href="mailto:work.mohitsuroliya@gmail.com" className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
            <Mail className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <p className="text-sm text-gray-400">Professional Email</p>
            <p className="font-bold text-sm md:text-base">work.mohitsuroliya@gmail.com</p>
          </a>

          {/* Secure WhatsApp Link */}
          <a href="https://wa.me" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all group">
            <MessageCircle className="text-green-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <p className="text-sm text-gray-400">WhatsApp Me</p>
            <p className="font-bold">Chat Privately</p>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
            <Linkedin className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <p className="text-sm text-gray-400">LinkedIn</p>
            <p className="font-bold">Mohit Suroliya</p>
          </a>
        </div>

        {/* Right Side: Secure Formspree Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 p-10 rounded-[2.5rem] backdrop-blur-3xl bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 'name' attributes are critical for Formspree */}
              <input name="name" type="text" required className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none" placeholder="Your Name" />
              <input name="email" type="email" required className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none" placeholder="Your Email" />
            </div>
            <textarea name="message" rows="4" required className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none" placeholder="How can I help you?"></textarea>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all"
            >
              {isSent ? "Message Received! 🚀" : "Send Mission"}
              <Send size={20} className={isSent ? "translate-x-20 -translate-y-20 transition-all duration-1000" : ""} />
            </motion.button>
          </form>

          {isSent && (
            <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: -400, x: 400, opacity: 0 }} transition={{ duration: 1.5 }} className="absolute bottom-10 left-10 text-5xl">🚀</motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
