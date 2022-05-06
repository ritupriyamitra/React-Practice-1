import AddFormTask from './components/AddFormTask'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

import React, { useState } from 'react'

function App() {
  const [tasks,setTask] = useState([
    {
        id:1,
        text:'task1-Doctor',
        day:'Mon day 4pm',
        reminder:true,
    },
    {
        id:2,
        text:'task2-Market',
        day:'Tues day 1pm',
        reminder:false,
    },
    {
        id:3,
        text:'task3-Food',
        day:'Wed day 9pm',
        reminder:true,
    }
])

//Add Task

const AddTask =()=>{
console.log('submit clicked')
}


  // Toggle Reminder
  const toggleReminder = (id) =>{
    alert('ss')
    setTask(
      tasks.map((task) =>
      task.id===id ? {...task,reminder:!task.reminder } : task 

      )
    )
  
  }

  return (
  <div className='container'>
   
     <Header/>
     <AddFormTask AddTask={AddTask}/>
     <Tasks tasks={tasks} toggleReminder={toggleReminder}/>
    
  </div> 
  
  );
}

export default App;
