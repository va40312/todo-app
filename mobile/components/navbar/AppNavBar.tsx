import { useGlobalContext } from "@/context/GlobalProvider";
import { Text, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "../navigation/TabBarIcon";
import useLogout from "@/hooks/useLogout";

const AppNavBar = () => {
  const {isLogged, user} = useGlobalContext()
  const logout = useLogout()

  if (!isLogged) return null
  return (
    <View className="flex-row w-100 justify-between">
      <Text className="text-lg font-pregular">Welcome, {user.login}</Text>
      <TouchableOpacity
        className="flex-row justify-end items-center"
        onPress={logout}
      >
        <Text>Logout</Text>
        <TabBarIcon name={'log-out'} color={'black'} />
      </TouchableOpacity>
    </View>
  )
}
export default AppNavBar;