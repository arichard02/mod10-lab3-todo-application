import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);

  function addTodo(text) {
    const cleanText = text.trim();
    if (!cleanText) return;

    const newTodo = {
      id: Date.now(),
      text: cleanText,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  }

  function toggleTodo(id) {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
    setTodos(updated);
  }

  function deleteTodo(id) {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  }

  function editTodo(id, newText) {
    const cleanText = newText.trim();
    if (!cleanText) return;

    const updated = todos.map((t) =>
      t.id === id ? { ...t, text: cleanText } : t,
    );
    setTodos(updated);
  }

  function clearCompleted() {
    const updated = todos.filter((t) => !t.completed);
    setTodos(updated);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
