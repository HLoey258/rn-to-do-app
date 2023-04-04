import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Item = (props) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : `${number}`;
  return (
    <TouchableOpacity onPress={props.onDeleteTask}>
      <View className="bg-white flex flex-row items-center rounded-md mb-5">
        <View>
          <Text className="p-3 m-3 pl-5 pr-5 bg-slate-500 rounded-md mr-5 ">
            {numberText}
          </Text>
        </View>
        <View>
          <Text className="text-[16px] ">{props.onNewTask}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
