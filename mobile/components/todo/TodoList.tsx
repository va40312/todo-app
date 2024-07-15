import { FlatList, RefreshControl, Text, View } from "react-native";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { SwipeListView } from "react-native-swipe-list-view";

const TodoList = ({ todos, fetchTodos }:any) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async() => {
    setRefreshing(true);
    await fetchTodos(); // Загрузка новых данных
    setRefreshing(false);
  };

  return (
    // <FlatList
    //   data={todos}
    //   renderItem={({ item }: any) => (<TodoItem todo={item} />)}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //     />
    //   }
    //   />


    <SwipeListView
            data={todos}
            renderItem={ ({item}, rowMap) => (<TodoItem todo={item} />)}
            renderHiddenItem={ (data, rowMap) => (
                <View>
                    {/* <Text>Left</Text>
                    <Text>Right</Text> */}
                </View>
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            leftOpenValue={75}
            disableRightSwipe
            
            rightOpenValue={-75}
        />
  )
}

export default TodoList;