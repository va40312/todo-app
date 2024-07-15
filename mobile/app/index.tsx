
import { useGlobalContext } from "@/context/GlobalProvider";
import useLogin from "@/hooks/useLogin";
import AuthStorage from "@/utils/AuthStorage";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const { loading, isLogged } = useGlobalContext();
  const login = useLogin()

  const restoreAuth = async () => {
    const auth = await AuthStorage.getItem()
    if (auth) {
      console.log(auth)
      login(auth)
    }
  }

  useEffect(() => {
    restoreAuth()
  }, []);

  if (!loading && isLogged) return <Redirect href="/home" />;
  else return <Redirect href="/login" />
}

export default index;