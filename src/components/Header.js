import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header =({showAddTasks,changeShowAddTasks})=>{
const location = useLocation()

    return (
        <div className='header'>
           <h1>Task Tracker</h1>
           {location.pathname === '/' &&<Button title='Add' color={showAddTasks?'red':'green'} text ={showAddTasks?'close':'Add'} changeShowAddTasks={changeShowAddTasks}/>  }       
         
        </div>
    )
        
   
   
}

export default Header