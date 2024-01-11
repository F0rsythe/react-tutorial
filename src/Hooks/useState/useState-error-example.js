import React from 'react'
import { useState } from 'react'

const ErrorExample = () => {
    const [value,setValue] = useState("random title")
    const handleClick = () =>{
      if(value === "random title" )
              setValue('hello world')
      else
              setValue('random title')
    }
  return (
    <div className='container'>
        <h2>{value}</h2>
        <button type='button' className='btn' onClick={handleClick}>Randomize</button>
    </div>
  )
}

export default ErrorExample