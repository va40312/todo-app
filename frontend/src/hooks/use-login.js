import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";

export function useLogin () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const key = "login-info"
  return async (response, messageApi) => {
    try {
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
  }
}