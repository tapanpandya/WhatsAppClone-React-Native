import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route.params);

  return (
    <View>
      <Text>Chat Room</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatRoomScreen;
