import { Alert, Text, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "../navigation/TabBarIcon";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useTodos from "@/hooks/useTodos";
import todoService from "@/services/todoService";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useState } from "react";
import EditTodoCard from "./EditTodoCard";

const TodoItem = ({ todo }) => {
  const {accessToken} = useGlobalContext()
  const {fetchTodos} = useTodos()
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleComplete = async (isChecked: boolean) => {
    try {
      await todoService.updateTodo(accessToken, todo._id, {
        isComplete: isChecked,
        text: todo.text
      })
      await fetchTodos()
    } catch(e) {
      Alert.alert('todo toggle error!', e.message)
    }
  }

  const deleteTodo = async () => {
    try {
      await todoService.deleteTodo(accessToken, todo._id)
      await fetchTodos()
    } catch(e) {
      Alert.alert('todo delete error!', e.message)
    }
  }

  if (isEditMode) return <EditTodoCard todo={todo} setIsOpen={setIsEditMode}/>

  return (
    <View className={`flex-row items-center justify-between p-4 bg-white rounded shadow mb-2`}>
      <View className="flex-row items-center justify-between">
        <BouncyCheckbox
          size={25}
          fillColor="blue"
          unFillColor="#FFFFFF"
          text={todo.text}
        //   textComponent={<Text className={`text-lg ${todo.isComplete ? 'line-through text-gray-400' : 'text-gray-900'}`}>
        //   {todo.text}
        // </Text>}
          isChecked={todo.isComplete}
          iconStyle={{ borderColor: "blue" }}
          innerIconStyle={{ borderWidth: 2 }}
          style={{width: '80%'}}
          onPress={toggleComplete}
        />
        {/* <Text className={`text-lg ${todo.isComplete ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {todo.text}
        </Text> */}

        <View className="mr-2">
          <TouchableOpacity
            onPress={() => setIsEditMode(true)}
          >
            <TabBarIcon name={'create'} color={'black'} />
          </TouchableOpacity>
        </View>

        <View className="mr-2">
          <TouchableOpacity
            onPress={deleteTodo}
          >
            <TabBarIcon name={'close'} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;