import { Button } from '@chakra-ui/react'
import React from 'react'

function Todos({todos}) {
  return (
    <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <Button>{todo.completed==true ? "completed":"mark as completed"}</Button>
            </div>
        })}
    </div>
  )
}

export default Todos