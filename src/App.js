import AddFormTask from './components/AddFormTask'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import About from './components/About'
import Example from './components/Example'
import {Route,BrowserRouter as Router} from 'react-router-dom'

import React, { useEffect, useState } from 'react'


function App() {

  const [showAddTasks,setShowAddTasks] = useState(false)
//   const [tasks,setTask] = useState([
//     {
//         id:1,
//         text:'task1-Doctor',
//         day:'Mon day 4pm',
//         reminder:true,
//     },
//     {
//         id:2,
//         text:'task2-Market',
//         day:'Tues day 1pm',
//         reminder:false,
//     },
//     {
//         id:3,
//         text:'task3-Food',
//         day:'Wed day 9pm',
//         reminder:true,
//     }
// ])

const [tasks,setTask] = useState([])

//toggle add and close button 

const changeShowAddTasks = () =>{
  setShowAddTasks(!showAddTasks)

}

//Show Task from DB
useEffect( ()=>{
  const dataFetch = async ()=>{
    const finalData = await fetchingTasks()   
    setTask(finalData)
  }
  dataFetch()
},[] )

//fetching tasks
const fetchingTasks = async()=>{
  const data = await fetch('http://localhost:7000/tasks')
  const res = await data.json() 
  return res;
}
//fetching task
const fetchingTask = async(id)=>{
  const data = await fetch(`http://localhost:7000/tasks/${id}`)
  const res = await data.json() 
  return res;
}


//Add Task

const AddTask =(task)=>{
  const id = Math.floor(Math.random()*10000) +1
  const newTask ={id,...task}//Imp JS concept spread operator
  setTask([...tasks,newTask])//Imp js concept operator
}

//delete task

const deleteTask = async(id) =>{
  await fetch(`http://localhost:7000/tasks/${id}`,{
    method:'DELETE'
  })
  setTask(tasks.filter((task)=>task.id !== id))
}


  // Toggle Reminder
  const toggleReminder = async(id) =>{
    const data = await fetchingTask(id)
    const updTask = {...data , reminder:!data.reminder}

   const res = await fetch(`http://localhost:7000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(updTask)

    } )   
   
    const finalData= await res.json()
    console.log("finalData:: "+finalData.title)
    setTask(
      tasks.map((task) =>
      task.id===id ? {...task,reminder:finalData.reminder } : task 

      )
    )
  
  }

  return (
    <Router>
    <div className='container'>   
    <Header showAddTasks={showAddTasks} changeShowAddTasks={changeShowAddTasks}/>
    <Route path='/' exact render={(props)=>(
         <>
        
         {showAddTasks&&<AddFormTask onAdd={AddTask} />}
         <Tasks tasks={tasks} toggleReminder={toggleReminder} deleteTask={deleteTask}/>
         </>
    )
    } /> 
   

    <Route path='/about' component ={About}/>
    <Footer /> 
    {/* <Example/> */}
    </div> 
    </Router>
 
  
  );
}

export default App;
