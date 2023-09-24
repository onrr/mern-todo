import { TodosContext } from "../context/TodosContext"
import { useContext } from "react"

export const useTodos = () => {
  const context = useContext(TodosContext)

  if(!context) {
    throw Error('Something wrong here..')
  }

  return context
}