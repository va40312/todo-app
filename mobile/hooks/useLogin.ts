import { router } from 'expo-router';
import { useGlobalContext } from './../context/GlobalProvider';
import AuthStorage from '@/utils/AuthStorage';


export default function useLogin () {
  const {setUser, setAccessToken, setIsLogged}: any = useGlobalContext()

  return (response: any) => {
    setUser(response.user)
    setAccessToken(response.accessToken)
    setIsLogged(true)

    AuthStorage.setItem(response)
    router.push('/home')
  }
}