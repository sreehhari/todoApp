import React from 'react'
import { Box, Container, Stack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
const CreateTodo = () => {
  return (
    <>
   <Box display='flex' flexDirection='column'>
    <Heading>Todo</Heading>


    <Container>
      <Stack align='center' gap={4}>
    <Input
      placeholder='title'
      size='md'
    />
    
    <Input
      placeholder='content'
      size='md'
    />

    <Button colorScheme='teal' variant='solid'>Save</Button>
      </Stack>
    </Container>

   </Box>
    
    
    
    </>
   



)
}

export default CreateTodo