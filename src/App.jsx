import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <nav className="flex justify-between items-center p-5 border-b border-gray-300 dark:border-gray-800">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleTheme}
          className="p-2 px-4 rounded bg-gray-200 dark:bg-gray-700 font-medium transition-colors"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      <main className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Theme Test</h2>
        <p className="text-lg">
          Abhi theme <b>{theme}</b> mode par hai.
        </p>

        <div className="mt-10 p-6 border rounded-lg inline-block dark:border-gray-600">
          Agar background black nahi ho raha, toh ek baar <b>npm run dev</b> restart karein.
        </div>
      </main>
    </div>
  );
}

export default App;