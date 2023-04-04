import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const handleAddText = () => {
    if (text.length === 0) {
      alert("You must fill this fill first");
      return false;
    }
    props.onAddTask(text);
    setText(" ");
    Keyboard.dismiss();
  };
  return (
    <View className="flex flex-row justify-between items-center p-4 bg-[#eff7f8] gap-1">
      <TextInput
        value={text}
        className="bg-white w-[80%] p-3 rounded-xl border-2 border-slate-900"
        placeholder="Your text here"
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <TouchableOpacity onPress={handleAddText}>
        <View className="bg-cyan-600 rounded-3xl h-12 w-12 items-center justify-center text-center">
          <Text className=" text-white text-xl ">+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
