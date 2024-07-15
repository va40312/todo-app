import { useState } from "react";
import { TabBarIcon } from "../navigation/TabBarIcon";
import { Text, TouchableOpacity } from "react-native";
import AddTodoCard from "./AddTodoCard";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);  // Correctly use useState

  return (
    isOpen ? (
      <AddTodoCard setIsOpen={setIsOpen}/>
    ) : 
    (
      <TouchableOpacity
        className="flex-row justify-center items-center "
        onPress={() => setIsOpen(true)}
      >
        <TabBarIcon name={'add'} color={'#2563eb'} />
        <Text className="text-xl text-blue-600">Add todo</Text>
      </TouchableOpacity>
    )
  );
}
export default AddTodo;