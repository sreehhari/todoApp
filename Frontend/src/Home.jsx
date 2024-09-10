import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';
import { CgCheckO } from "react-icons/cg";
import { CgBackspace } from "react-icons/cg";
import { IoMdDoneAll } from "react-icons/io";
function Home() {
    const[todo,setTodo]=useState([]);
    const[changes,makeChanges]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setTodo(result.data))
        .catch(err=>console.log(err))
    },[todo,changes])
    const updatetodo = (id) =>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result=>makeChanges(result))
        .catch(err=>console.log(err))
        

    }
    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result=>makeChanges(result))
        .catch(err=>console.log(err))
    }
  return (
    
        <div className='flex flex-col items-center justify-center h-screen bg-lime-200'> 
        <h1 className='text-2xl '>Todo app basic</h1>
        <div className='p-9'>
        <Create/>
        <br />
        </div>
        <div className=''>
            {
                todo.length===0
                ?<div><h2>Todo empty</h2></div>
                :
                todo.map(todo=>(

                    <div className='flex items-center w-80 justify-between bg-yellow-300 rounded-lg from-neutral-50 h-8 pl-1 pt-2 pr-3 pb-2 mt-1 gap-1'>
                        <div className='flex items-center' onClick={()=>updatetodo(todo._id)}>
                            {
                                todo.done ? <IoMdDoneAll />
                                :                   
                                 <CgCheckO className='m-2' />

                            }
                        <p className={todo.done? 'line-through' : 'no-underline'}>{todo.task}</p>
                        </div>
                        <div >
                            <span><CgBackspace onClick={()=>handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                ))
               
            }
        </div>
        </div>
    
  )
}

export default Home