import { useGlobalContext } from "@/context/GlobalProvider";
import useTodos from "@/hooks/useTodos";
import todoService from "@/services/todoService";
import { useEffect, useState } from "react";
import { Alert, Keyboard, TextInput, View } from "react-native";


const AddTodoCard = ({ setIsOpen }) => {
  const {accessToken} = useGlobalContext()
  const {fetchTodos} = useTodos()
  const [text, setText] = useState('')

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsOpen(false);
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const createTodo = async () => {
    try {
      let response = await todoService.createTodos(accessToken, {
        text
      })
      await fetchTodos()
      setText('')
      setIsOpen(false)
    } catch(e) {
      Alert.alert('Todo add error!');
    }
  };

  const onFinishFailed = () => {
    Alert.alert('Submit failed!');
  };

  return (
    <View className={`flex-row items-center justify-between p-4 bg-white rounded shadow mb-2`}>
      <View className="flex-row items-center">
      <TextInput
          className="flex-1 font-psemibold text-base"
          // value={value}
          // placeholder={placeholder}
          // onChangeText={handleChangeText}
          placeholderTextColor="#7B7B8B"
          autoCapitalize = {"none"}
          autoFocus={true}
          onChangeText={setText}
          value={text}
          onEndEditing={createTodo}
        />
      </View>
    </View>
  )
}

export default AddTodoCard;