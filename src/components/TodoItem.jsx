import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  function handleSave() {
    editTodo(todo.id, draft);
    setIsEditing(false);
  }

  return (
    <li className="item">
      <label className="row gap grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {!isEditing ? (
          <span className={todo.completed ? "done" : ""}>{todo.text}</span>
        ) : (
          <input
            className="input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
        )}
      </label>

      {!isEditing ? (
        <div className="row gap">
          <button
            className="btn"
            onClick={() => setIsEditing(true)}
            type="button"
          >
            Edit
          </button>
          <button
            className="btn"
            onClick={() => deleteTodo(todo.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="row gap">
          <button
            className="btn btn-primary"
            onClick={handleSave}
            type="button"
          >
            Save
          </button>
          <button
            className="btn"
            onClick={() => setIsEditing(false)}
            type="button"
          >
            Cancel
          </button>
        </div>
      )}
    </li>
  );
}
