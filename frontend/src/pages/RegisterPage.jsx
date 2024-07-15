import { Flex } from "antd"
import Title from "antd/es/typography/Title"
import RegisterForm from "../components/forms/RegisterForm"

const RegisterPage = () => {
  const boxStyle = {
    width: '100%',
    marginTop: 100
  }

  return (
    <div>
      <Flex style={boxStyle} justify={'center'} align={'center'}>
        <Flex vertical>
          <Title level={4}>Register page</Title>
          <RegisterForm/>
        </Flex>
      </Flex>
    </div>
  )
}

export default RegisterPage