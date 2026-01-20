import { GoogleGenAI } from '@google/genai';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader2 } from 'lucide-react';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

// AI Bot की पर्सनालिटी (पॉलिश की हुई इंग्लिश डिटेल्स)
const userPersona = `
    You are 'AIBot', a helpful assistant representing Full Stack Developer Mohit Suroliya.
    Mohit is pursuing his Full Stack Development course from the IIT Roorkee Intellipaat program.
    He holds a B.Com degree from MGSU University.
    His primary locations are Jaipur and Churu, Rajasthan, India.
    Mohit is skilled in HTML, CSS, JavaScript, React.js, Node.js, Angular, MongoDB, Express, and Tailwind CSS.
    Your first response should be "Welcome to Mohit's Portfolio! How can I help you?".
    After a conversation is finished (when user types 'bye' or 'thank you'), your final message should be "Nice to meet you sir! Have a nice day!".
    You should also politely ask clients what kind of projects they need assistance with.
    Only answer questions related to Mohit's professional work and background.
`;

export const AIChat = () => {
    const [messages, setMessages] = useState([
        // Default first message manually added here
        { role: 'model', content: "Welcome to Mohit's Portfolio! How can I help you?" }
    ]);
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
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [
                    ...messages.map(msg => ({ role: msg.role === 'model' ? 'model' : 'user', parts: [{ text: msg.content }] })),
                    { role: 'user', parts: [{ text: input }] },
                ],
                config: {
                    systemInstruction: userPersona,
                }
            });

            const botResponse = response.text;
            setMessages(prev => [...prev, { role: 'model', content: botResponse }]);
        } catch (error) {
            console.error("AI Bot Error:", error);
            setMessages(prev => [...prev, { role: 'model', content: "Sorry, I ran into an issue connecting to the AI. Try again later!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    // src/components/AIChat.jsx

return (
    // Position same hai
    <div className="fixed bottom-24 right-4 z-40"> 
        {/* Box ki width aur height kam ki hai: w-64 md:w-72 */}
        <div className="w-64 md:w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden">
            {/* Header code same hai */}
            <div className="p-4 bg-blue-600 text-white font-bold flex items-center gap-3">
                <Bot size={20} /> AIBot
            </div>
            
            {/* Message area ki height bhi kam ki hai: h-56 */}
            <div className="h-56 p-4 overflow-y-auto space-y-4">
                {/* ... AnimatePresence aur messages mapping code same hai ... */}
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
            </div>
            
            {/* Input area code same hai */}
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
}
