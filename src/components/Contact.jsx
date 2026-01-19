import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, MessageCircle, Linkedin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);

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
          <h2 className="text-4xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          
          <a href="mailto:work.mohitsuroliya@gmail.com" className="block p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all group shadow-sm dark:shadow-none">
            <Mail className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <p className="text-sm text-slate-500 dark:text-gray-400 font-medium">Professional Email</p>
            <p className="font-bold text-slate-900 dark:text-white text-sm md:text-base">work.mohitsuroliya@gmail.com</p>
          </a>

          <a href="https://wa.me" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-green-500/50 transition-all group shadow-sm dark:shadow-none">
            <MessageCircle className="text-green-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <p className="text-sm text-slate-500 dark:text-gray-400 font-medium">WhatsApp Me</p>
            <p className="font-bold text-slate-900 dark:text-white">Chat Privately</p>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all group shadow-sm dark:shadow-none">
            <Linkedin className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <p className="text-sm text-slate-500 dark:text-gray-400 font-medium">LinkedIn</p>
            <p className="font-bold text-slate-900 dark:text-white">Mohit Suroliya</p>
          </a>
        </div>

        {/* Right Side: Formspree Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 p-10 rounded-[2.5rem] backdrop-blur-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" type="text" required 
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500" 
                placeholder="Your Name" />
              <input name="email" type="email" required 
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500" 
                placeholder="Your Email" />
            </div>
            <textarea name="message" rows="4" required 
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500" 
              placeholder="How can I help you?"></textarea>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/30"
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
