import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";

export function useLogout ({messageApi}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const key = "logout-info"
  return async () => {
    try {
      dispatch(removeUser())

      messageApi.success({
        content: 'logout!',
        key
      })
      navigate('/')
    } catch(e) {
      console.log(e)
      messageApi.error({
        content: 'Logout error!',
        key
      })
    }
  }
}