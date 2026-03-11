import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButton from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext); // This must match the provider import exactly

  return (
    <div className={`app min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <ThemeToggleButton />
      <TodoInput />
      <FilterButton />
      <TodoList />
    </div>
  );
}