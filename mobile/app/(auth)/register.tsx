import RegisterForm from "@/components/forms/RegisterFrom";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <RegisterForm/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen;