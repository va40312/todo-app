import CustomButton from "@/components/formComponents/CustomButton";
import FormField from "@/components/formComponents/FormField";
import useLogin from "@/hooks/useLogin";
import userService from "@/services/userService";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";


const RegisterForm = () => {
  const login = useLogin()
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    login: "",
    password: "",
    repeatedPassword: ""
  });

  const submit = async () => {
    if (form.password !== form.repeatedPassword) {
      return Alert.alert("Error", "Passwords don't match!");
    }

    if (form.login === "" || form.password === "") {
      return Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      let response = await userService.register(form)
      login(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
        <View className="w-full flex justify-center h-full px-4 my-6">
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-2xl font-bold">
                Register
              </Text>
            </View>
            <FormField
              title="Login"
              otherStyles="mt-7"
              value={form.login}
              handleChangeText={(e) => setForm({ ...form, login: e })}
            />
            <FormField
              title="Password"
              otherStyles="mt-7"
              hidePassword={true}
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
            <FormField
              title="Repeat password"
              otherStyles="mt-7"
              hidePassword={true}
              value={form.repeatedPassword}
              handleChangeText={(e) => setForm({ ...form, repeatedPassword: e })}
            />

            <CustomButton
              title="Register"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg font-pregular">
                Already have an account?
              </Text>
              <Link
                href="/login"
                className="text-lg font-psemibold text-blue-700"
              >
                Login
              </Link>
            </View>
        </View>
  )
}

export default RegisterForm;