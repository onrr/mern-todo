import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { TodosContextProvider } from './context/TodosContext.jsx'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider>
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </ChakraProvider>
  </>,
)
