import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd"
import { Button, Form, Input, message, Space } from 'antd';
import todoService from "../../services/todo-service";
import { useTodos } from "../../hooks/use-todos";

const AddTodoCard = ({ setIsOpen }) => {
  const [form] = Form.useForm();
  const {fetchTodos} = useTodos()

  const onFinish = async (values) => {
    try {
      let response = await todoService.createTodos(values)
      message.success('Todo added!');
      await fetchTodos()
      onFill()
    } catch(e) {
      message.success('Todo add error!');
    }
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const onFill = () => {
    form.setFieldsValue({
      text: '',
    });
  };

  return (
    <Card style={{ width: 300 }}>
       <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="text"
        label="Todo text"
        rules={[{ required: true }, { type: 'string', warningOnly: true }, { type: 'string', min: 1, max: 100 }]}
      >
        <Input placeholder="enter todo text" />
      </Form.Item>
      <Form.Item>
        <Space align="end">
          <Button htmlType="button" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined/>}>
            Add todo
          </Button>
        </Space>
      </Form.Item>
    </Form>
    </Card>
  )
}

export default AddTodoCard;