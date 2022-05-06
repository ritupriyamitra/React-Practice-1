import React from 'react'
import Task from './Task'

const Tasks = ({tasks, toggleReminder}) =>{
   


    return (
      <>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}            
            toggleReminder={toggleReminder}
          />
        ))}
      </>
    );
}

export default Tasks