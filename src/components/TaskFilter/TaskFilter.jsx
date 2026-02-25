// the job of task filter is to filter items based on the users preference

function TaskFilter({items}) {
 console.log("TaskFilter", items);

  return (
    <>
    <div>
        <button id="all">All</button>
        <button id="active">Active</button>
        <button id="completed">Completed</button>

    </div>
    </>
  )
}

export default TaskFilter
