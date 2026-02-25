//the job of task list is to display all the task that the user passes in

import TaskItem from '../TaskItem/TaskItem'


function TaskList({items}) {
 console.log("TaskList", items);

  return (
    
      <ul>
        {
            items.map(item => {
                return (
                    <TaskItem text={item.text} id={item.id} completed={item.completed} />
                )
            })
        }
    

      </ul>
   
  )
}

export default TaskList

