// the job of task filter is to filter items based on the users preference
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { TodoContext } from "../contexts/TodoContext";


export default function FilterButtons () {
  const { filter, setFilter } = useContext(FilterContext);
  const { clearCompleted } = useContext(TodoContext);

  return (
    

<div className="row space wrap">
    <div className="row gap">
        {/* <button id="all" onClick={() => setFilter("all")}>All</button>
        <button id="active" onClick={() => setFilter("active")}>Active</button>
        <button id="completed" onClick={() => setFilter("completed")}>Completed</button> */}

          <button
          className={`btn ${filter === "all" ? "btn-primary" : ""}`}
          onClick={() => setFilter("all")}
          type="button"
        >
          All
        </button>

          <button
          className={`btn ${filter === "active" ? "btn-primary" : ""}`}
          onClick={() => setFilter("active")}
          type="button"
        >
          Active
        </button>

         <button
          className={`btn ${filter === "completed" ? "btn-primary" : ""}`}
          onClick={() => setFilter("completed")}
          type="button"
        >
          Completed
        </button>

    </div>

           <button className="btn" onClick={clearCompleted} type="button">
        Clear completed
      </button>

    </div>
    
  )
}


