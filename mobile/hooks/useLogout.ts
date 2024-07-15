import { router } from 'expo-router';
import { useGlobalContext } from './../context/GlobalProvider';
import AuthStorage from '@/utils/AuthStorage';


export default function useLogout () {
  const {setUser, setAccessToken, setIsLogged}: any = useGlobalContext()

  return (response: any) => {
    setIsLogged(false)
    setUser(null)
    setAccessToken(null)

    AuthStorage.removeItem()
    router.push('/login')
  }
}