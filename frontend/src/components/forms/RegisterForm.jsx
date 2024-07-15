import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import userService from '../../services/user-service';
import { useLogin } from '../../hooks/use-login';

const RegisterForm = () => {
  const login = useLogin()
  const [messageApi, contextHolder] = message.useMessage();

  const key = "register-info"
  const onFinish = async (values) => {
    console.log('Success:', values);
    let responce = await userService.register(values)
    login(responce, messageApi)
    messageApi.success({
      content: 'Success register!',
      key
    })
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    messageApi.error({
      content: 'Register error!',
      key,
      // style: {
      //   display: 'flex',
      //   justifyContent: 'flex-end',
      //   marginRight: '10%'
      // }
    })
  };

  return (
    <>
    {contextHolder}
    <Form
      name="normal_login"
      className="register-form"
      style={{"minWidth": "250px"}}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your Login!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="repeated-password"
        rules={[
            { required: true, message: 'Please repeat your Password!'},
           ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords do not match!'));
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Repeat password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{"width": "100%"}} className="register-form-button">
          Register
        </Button>
        Already have account? <Link to="/login">login</Link>
      </Form.Item>
    </Form>
    </>
  )
}

export default RegisterForm;