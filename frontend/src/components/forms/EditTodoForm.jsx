import { Button, Form, Input, message } from 'antd';
import todoService from '../../services/todo-service';
import { useTodos } from '../../hooks/use-todos';

const EditTodoForm = ({ todo, setIsEditMode }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const {fetchTodos} = useTodos()

  const key = "edit-form-info"

  const onFinish = async (values) => {
    console.log('Success:', values);

    try {
      console.log('todo', todo)
      let response = await todoService.updateTodo(todo._id, {
        text: values.text,
        isComplete: todo.isComplete
      })
      if (!response.data) throw new Error('data is empty')
      await fetchTodos()
      messageApi.success({
        content: 'Todo changed!',
        key
      })
      setIsEditMode(false)
    } catch(e) {
      console.log(e)
      messageApi.error({
        content: 'Todo change error!',
        key
      })
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    messageApi.error({
      content: 'Login error!',
      key
    })
  };

  return (
    <>
    {contextHolder}
    <Form
      name="customized_form_controls"
      layout="inline"
      initialValues={{ text: todo.text }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="text"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input name='text' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default EditTodoForm;