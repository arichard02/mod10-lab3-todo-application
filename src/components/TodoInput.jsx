import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoInput() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form className="row gap" onSubmit={handleSubmit}>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button className="btn btn-primary" type="submit">
        Add Todo
      </button>
    </form>
  );
}
