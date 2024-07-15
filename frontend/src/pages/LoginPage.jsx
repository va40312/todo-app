import { Flex } from "antd"
import LoginForm from "../components/forms/LoginForm"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/use-auth"
// import Text from "antd/es/typography/Text"

const LoginPage = () => {
  const {isAuth} = useAuth()

  const boxStyle = {
    width: '100%',
    marginTop: 100
  }

  return (
    <div>
      { isAuth ? <Navigate to="/"/> :
        <Flex style={boxStyle} justify={'center'} align={'center'}>
          <Flex vertical>
            {/* <Text strong>To create todo, your need to login</Text> */}
            <LoginForm/>
          </Flex>
        </Flex>
      }
    </div>
  )
}

export default LoginPage