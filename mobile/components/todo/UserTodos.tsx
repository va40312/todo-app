import TodoList from "./TodoList";
import { useEffect } from "react";
import useTodos from "@/hooks/useTodos";
import {  View } from "react-native";
import AddTodo from "./AddTodo";

const UserTodos = () => {
  const {fetchTodos, todos} = useTodos()

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <View>
      <TodoList todos={todos} fetchTodos={fetchTodos}/>
      <AddTodo/>
    </View>
  )
}

export default UserTodos;