import axiosInstance from "./axios-instance";

const todoService = {
  getTodos: () => {
    return axiosInstance.get("/todos");
  },
  createTodos: (data) => {
    return axiosInstance.post("/todos", data);
  },
  updateTodo: (id, payload) => {
    return axiosInstance.put(`/todos/${id}`, payload);
  },
  deleteTodo: (id) => {
    return axiosInstance.delete(`/todos/${id}`);
  }
};

export default todoService;