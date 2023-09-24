import React from 'react'
import { Box, ListItem, Checkbox, Text } from "@chakra-ui/react"

import { useTodos } from '../hooks/useTodos'

function TodoList({ todo, fetchTodos }) {

  const { dispatch } = useTodos()

  const toggleChecked = async (id) => {
    const response = await fetch('http://localhost:5000/api/todos/' + id, {
      method: 'PATCH',
      id
    })
    const json = await response.json()
    fetchTodos()
    return json
  }

  const handleClick = async () => {
    const response = await fetch('http://localhost:5000/api/todos/' + todo._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_TODO', payload: json })
    }
    fetchTodos()
  }

  return (

    <ListItem display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
      <Box onClick={() => toggleChecked(todo._id)}>
        <Checkbox colorScheme='whatsapp' size={'lg'} as={'div'} isChecked={todo.isCompleted}>
          <Text fontSize={22} fontWeight={todo.isCompleted === true ? 'italic' : 'semibold'} as={todo.isCompleted === true ? 'del' : ''} color={todo.isCompleted === true ? 'gray.400' : ''} >{todo.title}</Text>
        </Checkbox>
      </Box>
      <Box >
        <i className="fa-solid fa-minus" style={{ cursor: 'pointer', fontSize: '24px' }} onClick={handleClick} ></i>
      </Box>
    </ListItem>

  )
}

export default TodoList