import React from 'react'
import { Box, Container, Flex, Heading } from "@chakra-ui/react"

import ToggleTheme from "../components/ToggleTheme"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

function Home() {

    return (
        <Container maxW={'3xl'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={5} color={'gray.600'}>
                <Heading as='h1' size={'2xl'} mt={5}>
                    Todo App
                </Heading>
                <ToggleTheme />
            </Flex>
            <Box minH={'450px'} mt={10} boxShadow='2xl' rounded='md' p={'22px'} >
                <Flex flexDir={'column'}>
                    <TodoForm />
                    <TodoList />
                </Flex>
            </Box>
        </Container>
    )
}

export default Home