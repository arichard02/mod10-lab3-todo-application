import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import AddItem from "./components/AddItem/AddItem";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "clean house",
      completed: false,
    },

    {
      id: 2,
      text: "do homework",
      completed: false,
    },

    {
      id: 3,
      text: "have fun",
      completed: true,
    },
    
  ]);
  return (
    <>
      <AddItem items={todoList} setItems={setTodoList} />
      <TaskFilter items={todoList} />
      <TaskList items={todoList} />
    </>
  );
}

export default App;
