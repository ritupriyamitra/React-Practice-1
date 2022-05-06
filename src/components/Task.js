import React from 'react'
import { FaTimes } from "react-icons/fa";
const Task = ({task,toggleReminder}) =>{
    return (
      <div onDoubleClick={()=>{toggleReminder(task.id)}} className={`task-container ${task.reminder?'reminder':''}`} >
        <h3>{task.text} <FaTimes color='red' /></h3>
        <p>{task.day}</p>
      </div>
    );
}

export default Task