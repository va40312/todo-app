import { Text, TextInput, View } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  hidePassword=false,
  ...props
}: any) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={hidePassword}
          autoCapitalize = {"none"}
          {...props}
        />
      </View>
    </View>
  )
}

export default FormField;