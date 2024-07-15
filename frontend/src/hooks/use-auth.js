import { useSelector } from "react-redux"

export function useAuth () {
  const {accessToken, user} = useSelector(state => state.user)

  return {
    isAuth: !!accessToken,
    user
  }
}