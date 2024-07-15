import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        text: action.payload.text
      })
    },
    setTodos: (state, action) => {
      state.todos = action.payload
    },
  }
})

export const {addTodo, setTodos} = todoSlice.actions
export default todoSlice.reducer 