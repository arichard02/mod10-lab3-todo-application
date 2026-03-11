import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`btn mb-4 px-4 py-2 rounded ${
        theme === "dark"
          ? "bg-gray-700 text-white hover:bg-gray-600"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      Theme: {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}