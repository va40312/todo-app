import { useEffect } from "react";
import TodoList from "../components/todos/TodoList";
import { useTodos } from "../hooks/use-todos";

const TodosPage = () => {
  const {todos, fetchTodos, isLoading} = useTodos()

  useEffect(() => {
    fetchTodos()
  }, [])
  
  return (
    <TodoList todos={todos} isLoading={isLoading} />
  )
}

export default TodosPage