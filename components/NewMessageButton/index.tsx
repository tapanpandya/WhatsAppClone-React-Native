import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

const NewMessageButton = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="message-reply-text"
        size={28}
        color="white"
      />
    </View>
  );
};

export default NewMessageButton;
