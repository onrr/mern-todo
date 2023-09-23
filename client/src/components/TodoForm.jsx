import React from 'react'
import { FormControl, Input } from '@chakra-ui/react'

function TodoForm() {
  return (
    <form action="#">
      <FormControl isRequired display={'flex'} alignItems={'center'}>
        <Input placeholder='Do Something..' size={'lg'} variant='flushed' w={'full'} fontSize={"2xl"} focusBorderColor="gray.400" fontWeight={'semibold'} required />
      </FormControl>
    </form>
  )
}

export default TodoForm