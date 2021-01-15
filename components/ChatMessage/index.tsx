import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Message } from "../../types";
import { styles } from "./style";

export type ChatMessageProps = {
  message: Message;
};
const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMessage() ? "#DCF8C5" : "white",
            marginLeft: isMessage() ? 50 : 0,
            marginRight: isMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
