// src/components/Navbar.jsx
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme } = useTheme();
  
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-xl font-bold">
        My Portfolio
      </h1>
      <ThemeToggle />
    </nav>
  );
}

