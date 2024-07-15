import { useGlobalContext } from "@/context/GlobalProvider";
import { Redirect, Stack } from "expo-router";


const AuthLayout = () => {
  const {isLogged} = useGlobalContext()
  if (isLogged) return <Redirect href="/home" />
  return (
    <Stack>
      <Stack.Screen name="login" options={{
        headerShown: false
      }}/>
      <Stack.Screen name="register" options={{
        headerShown: false
      }}/>
    </Stack>
  )
}

export default AuthLayout;