import React, { useState } from 'react'
import { FormControl, Input } from '@chakra-ui/react'

import { useTodos } from '../hooks/useTodos'

function TodoForm() {
  const [title, setTitle] = useState('')
  const { dispatch } = useTodos()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const todo = { title }

    const response = await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      console.log(json.error)
    }
    if (response.ok) {
      setTitle('')
      dispatch({ type: 'CREATE_TODO', payload: json })
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired display={'flex'} alignItems={'center'}>
        <Input placeholder='Do Something..' size={'lg'} variant='flushed'
          w={'full'} fontSize={"2xl"} focusBorderColor="gray.400"
          fontWeight={'semibold'} required
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
      </FormControl>
    </form>
  )
}

export default TodoForm