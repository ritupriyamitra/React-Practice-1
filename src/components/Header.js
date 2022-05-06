import React from 'react'
import Button from './Button'

const Header =({showAddTasks,changeShowAddTasks})=>{


    return (
        <div className='header'>
           <h1>Task Tracker</h1>
           <Button title='Add' color={showAddTasks?'red':'green'} text ={showAddTasks?'close':'Add'} changeShowAddTasks={changeShowAddTasks}/>         
         
        </div>
    )
        
   
   
}

export default Header