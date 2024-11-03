"use client";

import { useState, useEffect } from "react";
import { FaSun, FaGhost } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        p-2 rounded-full transition-all duration-300 dark:bg-gray-700 bg-teal-50 cursor-pointer`}
      aria-label="Toggle theme"
    >
      {!darkMode ? (
        <FaSun className="w-6 h-6 text-yellow-500" />
      ) : (
        <FaGhost className="w-6 h-6 text-custom-orange" />
      )}
    </button>
  );
};

export default ThemeToggle;
