import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";

import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route.params);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={BG}>
        <FlatList
          data={chatRoomData.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default ChatRoomScreen;
