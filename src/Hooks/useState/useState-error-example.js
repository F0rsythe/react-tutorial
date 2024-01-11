import React from 'react'
import { useState } from 'react'

const ErrorExample = () => {
    let title = "Random title"
    const handleClick = () =>{

    }
  return (
    <div className='container'>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={()=>{handleClick()}}>Randomize</button>
    </div>
  )
}

export default ErrorExample