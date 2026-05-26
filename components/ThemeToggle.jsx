"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setLightMode(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    if (lightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setLightMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-cyan-400 hover:text-black"
      aria-label="Toggle theme"
    >
      {lightMode ? <FiMoon /> : <FiSun />}
    </button>
  );
}