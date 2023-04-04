import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, ScrollView, Alert } from "react-native";
import GlobalStyles from "./GlobalStyles";
import Item from "./components/ListItem/Item";
import Form from "./components/Text Input/Form";
import { useState } from "react";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleClearList = () => {
    setTaskList([""]);
  };
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Warning", "Do you really want to delete this task?", [
      {
        text: "OK",
        onPress: () => {
          let tasklistTmp = [...taskList];
          tasklistTmp.splice(index, 1);
          setTaskList(tasklistTmp);
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          return false;
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View className="flex-1 bg-[#eff7f8] p-5">
        <Text className="text-red-500 mb-3 color-[#21a3d0] font-bold text-xl">
          {" "}
          To Do List
        </Text>
        <ScrollView>
          {taskList.map((item, index) => {
            return (
              <Item
                onNewTask={item}
                number={index + 1}
                onDeleteTask={() => {
                  handleDeleteTask(index);
                }}
              ></Item>
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}></Form>
    </SafeAreaView>
  );
}
