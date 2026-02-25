import "./TaskItem.css";

function TaskItem(props) {
  const text = props.text;
  const id = props.id;
  const completed = props.completed;

  return (
    <li>
      <div>
        <input id="name" type="checkbox" checked={completed} />
        {text}
      </div>
      <div>
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;

// importing children from the AddItem - receiving props from the parent component
