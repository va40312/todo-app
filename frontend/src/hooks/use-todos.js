import { useDispatch, useSelector } from "react-redux"
import todoService from "../services/todo-service"
import { useState } from "react"
import { setTodos } from "../store/todoSlice"

export function useTodos () {
  const {todos} = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

  const fetchTodos = async () => {
    try {
      const response = await todoService.getTodos()
      setIsLoading(false)
      if (!response.data.todos) throw new Error('not valid data from responce')
      dispatch(setTodos(response.data.todos))
    } catch(e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  return {
    todos,
    fetchTodos,
    isLoading
  }
}