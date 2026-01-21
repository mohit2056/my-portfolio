// api/gemini-proxy.js (Serverless Function for Vercel)

import { GoogleGenAI } from '@google/genai';

// API Key सीधे Vercel Environment Variables से लोड होगी (GitHub पर नहीं दिखेगी)
const apiKey = process.env.GEMINI_API_KEY; 
const ai = new GoogleGenAI({ apiKey });

// AI Bot की पर्सनालिटी
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


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: message.content }] }], 
        config: {
            systemInstruction: userPersona,
        }
    });

    res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error in proxy:", error);
    res.status(500).json({ error: 'Failed to get AI response.' });
  }
}
