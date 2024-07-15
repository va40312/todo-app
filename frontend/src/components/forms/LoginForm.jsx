import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../services/user-service';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
const [messageApi, contextHolder] = message.useMessage();

  const key = "login-info"

  const onFinish = async (values) => {
    console.log('Success:', values);

    try {
      let response = await userService.login(values)
      if (!response.data) throw new Error('data is empty')
      dispatch(setUser(response.data))

      messageApi.success({
        content: 'Success login!',
        key
      })
      navigate('/')
    } catch(e) {
      console.log(e)
      messageApi.error({
        content: 'Login error!',
        key
      })
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    messageApi.error({
      content: 'Login error!',
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
      className="login-form"
      style={{"minWidth": "250px"}}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{"width": "100%"}} className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    </>
  )
}

export default LoginForm;