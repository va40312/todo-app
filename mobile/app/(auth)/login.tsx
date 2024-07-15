
import { ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "@/components/forms/LoginForm"

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginForm/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen;