import React, { useState } from 'react'
import { Box, Container, Stack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
const CreateTodo = () => {
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("")
  return (
    <>
   <Box display='flex' flexDirection='column'>
    <Heading>Todo</Heading>


    <Container>
      <Stack align='center' gap={4}>
    <Input
      placeholder='title'
      size='md'
      onChange={function(e){
        const value = e.target.value;
        setTitle(value);
      }}
    />
    
    <Input
      placeholder='content'
      size='md'
      onChange={function(e){
        const value=e.target.value;
        setDescription(value);
      }}
    />

    <Button colorScheme='teal' variant='solid' onClick={()=>{
      fetch("http://localhost:3000/todos",{
        method:"POST",
        body:{
          title:title,
          description:description
        }
      })
        .then(async function(res){
          const json = await res.json();
          alert("todo added");
          console.log("done");
        })
    }}>Save</Button>
      </Stack>
    </Container>

   </Box>
    
    
    
    </>
   



)
}

export default CreateTodo