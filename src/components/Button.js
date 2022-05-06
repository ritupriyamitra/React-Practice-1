import React from 'react'

const Button = ({title,color ,text , changeShowAddTasks}) =>{

    return(
        <button className='btn' style={{backgroundColor: color}} onClick= {changeShowAddTasks}>{text}</button>
    )
}

export default Button