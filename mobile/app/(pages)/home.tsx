
import AppNavBar from "@/components/navbar/AppNavBar";
import UserTodos from "@/components/todo/UserTodos";
import { ScrollView, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        <AppNavBar />
        <UserTodos/>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default HomeScreen;