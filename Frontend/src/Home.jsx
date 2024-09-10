import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const[todo,setTodo]=useState([])
  return (
    
        <div className='flex flex-col items-center justify-center h-screen bg-lime-200'> 
        <h1 className='text-2xl '>Todo app basic</h1>
        <div className='p-9'>
        <Create/>
        </div>
        </div>
    
  )
}

export default Home