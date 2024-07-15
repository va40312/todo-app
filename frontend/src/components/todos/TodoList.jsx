import { List } from "antd"
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const TodoList = ({ todos, isLoading }) => {
  return (
    <List
      header={<div>Todo list</div>}
      footer={
        <AddTodo/>
      }
      bordered
      dataSource={todos}
      loading={isLoading}
      keyExtractor={(item) => item._id}
      renderItem={(item) => (
        <TodoItem item={item}/>
      )}
    />
  )
}

export default TodoList;