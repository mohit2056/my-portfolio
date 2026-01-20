# My AI-Powered Cosmic Portfolio

This is a professional, full-stack developer portfolio. It is built with React, Node.js, Firebase, and Google Gemini AI.

The project offers an interactive and dynamic user experience optimized for both light and dark modes.

## 🚀 Live Demo

\[Replace with your Vercel Live Link: my-portfolio-sigma.vercel.app]

## ✨ Key Features

*   **🤖 AI Chatbot (AIBot):** An integrated, real-time AI assistant. It is powered by the Google Gemini API. It answers specific questions about skills, education (B.Com from MGSU, IIT Roorkee Intellipaat program), and projects.
*   **🌐 Full-Stack Integration:** Firebase Firestore is used for real-time data storage in the testimonials section.
*   **🌗 Dual-Mode UI:** Seamless switching between Light and Dark themes is available. This uses Tailwind CSS and conditional rendering.
*   **🖼️ Verified Credentials:** Interactive modals in the 'About' section showcase professional certifications (e.g., Microsoft SQL Certification).
*   **🌟 Dynamic Animations:** Smooth UI/UX is driven by Framer Motion and Lottie animations (patrolling astronaut).
*   **📱 Fully Responsive:** The portfolio is optimized for performance across all devices (mobile, tablet, desktop).

## 🛠️ Technologies Used

*   **Frontend:** React.js, Tailwind CSS, Framer Motion, Lottie-React
*   **Backend/Database:** Firebase (Firestore), Node.js (Conceptual)
*   **AI:** Google Gemini API (`@google/genai`)
*   **Deployment:** Vercel
*   **Version Control:** Git & GitHub

## ⚙️ Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com
    cd my-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root directory and add API keys:

    ```
    VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    # Note: Ensure this key is added to Vercel Environment Variables as well
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

## 📄 License

This project is licensed under the MIT License.
