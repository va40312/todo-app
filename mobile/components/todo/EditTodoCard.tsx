import { useGlobalContext } from "@/context/GlobalProvider";
import useTodos from "@/hooks/useTodos";
import todoService from "@/services/todoService";
import { useEffect, useState } from "react";
import { Alert, Keyboard, TextInput, View } from "react-native";


const EditTodoCard = ({ todo, setIsOpen }) => {
  const {accessToken} = useGlobalContext()
  const {fetchTodos} = useTodos()
  const [text, setText] = useState(todo.text)

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
      let response = await todoService.updateTodo(accessToken, todo._id, {
        text,
        isComplete: todo.isComplete
      })
      await fetchTodos()
      setIsOpen(false)
    } catch(e) {
      Alert.alert('Todo edit error!');
    }
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

export default EditTodoCard;