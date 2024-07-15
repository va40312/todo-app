import { router } from 'expo-router';
import { useGlobalContext } from './../context/GlobalProvider';
import AuthStorage from '@/utils/AuthStorage';
import todoService from '@/services/todoService';
import { Alert } from 'react-native';


export default function useTodos () {
  const {todos, setTodos, accessToken}: any = useGlobalContext()

  const fetchTodos = async () => {
    try {
      let response = await todoService.getTodos(accessToken)
      setTodos(response.todos)
      // console.log(response.todos)
    } catch(e) {
      console.log(e)
      Alert.alert('Todo fetch error', e.message)
    }
  }

  return {
    todos,
    fetchTodos
  }
}