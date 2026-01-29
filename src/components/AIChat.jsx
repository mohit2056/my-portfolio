import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader2, X, MessageSquare } from 'lucide-react';

export const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ role: 'model', content: "Welcome to Mohit's Portfolio! How can I help you?" }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    useEffect(scrollToBottom, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/gemini-proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error('Failed to fetch AI response securely.');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'model', content: data.text }]);
        } catch (error) {
            console.error("AI Bot Error:", error);
            setMessages(prev => [...prev, { role: 'model', content: "Sorry, I ran into an issue connecting to the AI securely." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[320px] md:w-80 bg-white dark:bg-slate-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-blue-500/20 overflow-hidden"
                    >
                        <div className="p-4 bg-blue-600 text-white font-bold flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bot size={20} />
                                <span>AIBot</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="h-80 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-slate-900/50">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                                        msg.role === 'user'
                                        ? 'bg-blue-600 text-white ml-auto rounded-tr-none'
                                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-gray-100 shadow-sm rounded-tl-none'
                                    }`}
                                >
                                    {msg.content}
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                className="flex-1 p-2.5 rounded-xl bg-gray-100 dark:bg-slate-700 border-none outline-none text-sm dark:text-white"
                                placeholder="Ask Mohit's AI..."
                            />
                            <button
                                onClick={sendMessage}
                                className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                            >
                                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-600/40 cursor-pointer z-50 border-2 border-white/20"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>
        </div>
    );
};
