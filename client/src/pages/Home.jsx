import React, { useEffect } from 'react'
import { Box, Container, Flex, Heading, List } from "@chakra-ui/react"

import { useTodos } from '../hooks/useTodos'

import ToggleTheme from "../components/ToggleTheme"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

function Home() {

    const { todos, dispatch } = useTodos()

    const fetchTodos = async () => {
        const response = await fetch('http://localhost:5000/api/todos')
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'SET_TODOS', payload: json })
        }
    }
    useEffect(() => {

        fetchTodos()
    }, [dispatch])

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
                    <Box mt={10}>
                        <List spacing={3}>
                            {todos && todos.map(todo => (
                                <TodoList key={todo._id} todo={todo} fetchTodos={fetchTodos} />
                            ))}
                        </List>
                    </Box>

                </Flex>
            </Box>
        </Container>
    )
}

export default Home