import React, {useState} from 'react'
import { Box, List, ListItem, Checkbox, Text } from "@chakra-ui/react"

function TodoList() {

  const [isChecked, setIsChecked] = useState(false)

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  }
  
  return (
    <Box mt={10}>
      <List spacing={3}>
        <ListItem display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
          <Box onClick={toggleChecked}>
            <Checkbox colorScheme='whatsapp' size={'lg'} as={'div'} >
              <Text fontSize={22} fontWeight={isChecked === true ? 'italic' : 'semibold'} as={isChecked === true ? 'del' : ''} color={isChecked === true ? 'gray.400' : ''} >Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
            </Checkbox>
          </Box>
          <Box >
            <i className="fa-solid fa-pen" style={{ cursor: 'pointer', marginRight: '25px' }}></i>
            <i className="fa-solid fa-minus" style={{ cursor: 'pointer' }}></i>
          </Box>
        </ListItem>
      </List>
    </Box>
  )
}

export default TodoList