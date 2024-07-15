import { Button, message } from "antd"
import { useAuth } from "../../hooks/use-auth"
import { LogoutOutlined } from "@ant-design/icons"
import { useLogout } from "../../hooks/use-logout"

const AppNavBar = () => {
  const {user} = useAuth()
  const [messageApi, contextHolder] = message.useMessage()
  const logout = useLogout(messageApi)
  return (
    <div>
    {contextHolder}
    <span>Welcome, {user.login}</span>
    <Button type="link" onClick={logout} icon={<LogoutOutlined/>} iconPosition={"end"}>
      Logout
    </Button>
    </div>
  )
}

export default AppNavBar