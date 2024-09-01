import { Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

function Todos({todos}) {
  return 
    
   {todos.map(function(todo){
        return<div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed==true?"completed":"mark as completed"}</button>
        </div>
            


        
   }
    
    

}

export default Todos