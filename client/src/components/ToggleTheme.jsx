import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

function ToggleTheme() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button onClick={toggleColorMode} top={5} fontSize={'2xl'}>
            {colorMode === 'light' ? <i className="fa-solid fa-moon" /> : <i className="fa-solid fa-lightbulb" />}
        </Button>
  )
}

export default ToggleTheme