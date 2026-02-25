// job of this component is to add new task to the items array

import { useState } from "react";

function AddItem({ items, setItems }) {
  const [textNew, setTextNew] = useState("");

  // create a function that adds the new todo to the items array
  function addNewItem() {
    const item = {
      id: items[items.length - 1].id + 1,
      text: textNew,
      completed: false,
    };
    setItems((prev) => [item, ...prev]);
    setTextNew("");
  }

  console.log("AddItems", items);
  //
  return (
    <>
     
        <input
          id="taskInput"
          type="text"
          value={textNew}
          onChange={(e) => setTextNew(e.target.value)}
        />
        <button onClick={addNewItem}>Add Todo</button>
     
    </>
  );
}

export default AddItem;

// handle change
// handle submit
