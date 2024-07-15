import { Stack } from "expo-router";


const PagesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{
        headerShown: false
      }}/>
    </Stack>
  )
}

export default PagesLayout;