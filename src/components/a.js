import React from 'react'

const a = () => {
  return(
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add task'/> 
        </div>
        <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day and Time'/>
        </div>
        <div className='form-control form-control-check'>
        <label>Set Reminder</label>
         <input type='checkbox'/>   
        </div>
        <input type='button' value = 'Save Task' className='btn btn-block'/> 
    </form>
 )
}

export default a
