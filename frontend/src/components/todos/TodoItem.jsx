import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {  Button, Checkbox, Input, List, Modal, Typography } from "antd"
import todoService from "../../services/todo-service";
import { useTodos } from "../../hooks/use-todos";
import { useState } from "react";
import EditTodoForm from "../forms/EditTodoForm";

const config = {
  title: 'Delete this todo?',
}

const TodoItem = (props) => {
  console.log(props)
  const {fetchTodos} = useTodos()
  const [modal, contextHolder] = Modal.useModal();
  const [isComplete, setIsCompelte] = useState(props.item.isComplete)
  const [isEditMode, setIsEditMode] = useState(false)

  const deleteTodo = async () => {
    const confirmed = await modal.confirm(config);
    if (confirmed) {
      await todoService.deleteTodo(props.item._id)
      await fetchTodos()
    }
  }

  const toggleComplete = async (e) => {
    console.log(`checked = ${e.target.checked}, isComplete: ${isComplete}`);

    const updatedIsComplete = e.target.checked
    setIsCompelte(updatedIsComplete)

    await todoService.updateTodo(props.item._id, {
      text: props.item.text,
      isComplete: updatedIsComplete
    })
    await fetchTodos()
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <List.Item>
      {contextHolder}
      <Checkbox onChange={toggleComplete} checked={isComplete} disabled={isEditMode} style={{width: '100%'}}>
        <Typography.Text delete={isComplete}>
          {isEditMode ? <EditTodoForm todo={props.item} setIsEditMode={setIsEditMode}/> :props.item.text}
          {isComplete}
        </Typography.Text>
      </Checkbox>
      <Button type="link" onClick={toggleEditMode} icon={<EditOutlined />}>
      </Button>

      <Button type="link" onClick={deleteTodo} icon={<DeleteOutlined />}>
      </Button>
    </List.Item>
  )
}

export default TodoItem;