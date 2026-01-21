// src/components/AIChat.jsx (पूरी तरह से अपडेटेड कोड)

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader2 } from 'lucide-react';

// यहाँ API Key की ज़रूरत नहीं है, कोड Vercel प्रॉक्सी का उपयोग करेगा

export const AIChat = () => {
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
            // Vercel प्रॉक्सी फ़ंक्शन का उपयोग करें
            const response = await fetch('/api/gemini-proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch AI response securely.');
            }

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
        <div className="fixed bottom-24 right-4 z-40">
            <div className="w-64 md:w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden">
                <div className="p-4 bg-blue-600 text-white font-bold flex items-center gap-3">
                    <Bot size={20} /> AIBot
                </div>
                <div className="h-56 p-4 overflow-y-auto space-y-4">
                    <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-blue-100 dark:bg-blue-900 ml-auto text-right' : 'bg-gray-100 dark:bg-gray-700'}`}
                            >
                                {msg.content}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        className="w-full p-2 rounded-l-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 outline-none"
                        placeholder="Ask AIBot..."
                    />
                    <button onClick={sendMessage} className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};
