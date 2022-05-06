import React, { useState } from 'react'

const AddFormTask = ({AddTask}) => {

    const[task,setTask]= useState('')
    const[day,setDay]= useState('')
    const[reminder,setReminder]= useState(false)

    const onSubmit =(e)=>{           
       e.preventDefault()
            if(!task){
                alert('please enter task');
                return
            } 
       AddTask({task,day,reminder})       
       setTask('')
       setDay('')
       setReminder(false)
    }
    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={task} placeholder='Add task' onChange={(e)=>setTask(e.target.value)}/> 
            </div>
            <div className='form-control'>
            <label>Day & Time</label>
            <input type='text'  value={day}  placeholder='Add Day and Time' onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
            <label>Set Reminder</label>
             <input type='checkbox'  value={reminder}  checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>   
            </div>
            <input type='button' value = 'Save Task' className='btn btn-block' /> 
        </form>
     )
}

export default AddFormTask
