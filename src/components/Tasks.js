import React from 'react'
import Task from './Task'

const Tasks = ({tasks, toggleReminder , deleteTask}) =>{
   


    return (
      <>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}            
            toggleReminder={toggleReminder}
            deleteTask= {deleteTask}
          />
        ))}
      </>
    );
}

export default Tasks