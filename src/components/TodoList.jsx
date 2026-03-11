import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext.jsx";
import { FilterContext } from "../contexts/FilterContext.jsx";
import TodoItem from "./ToDoItem.jsx"

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  let visibleTodos = todos;

  if (filter === "active") {
    visibleTodos = todos.filter((t) => !t.completed);
  }

  if (filter === "completed") {
    visibleTodos = todos.filter((t) => t.completed);
  }

  if (visibleTodos.length === 0) {
    return <p className="muted">No todos yet! Add one above.</p>;
  }

  return (
    <ul className="list">
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
