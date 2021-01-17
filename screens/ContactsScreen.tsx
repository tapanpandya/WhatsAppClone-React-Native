import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import ContactListItem from "../components/ContactListItem";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";

export default function ChatsScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await API.graphql(graphqlOperation(listUsers));
        setUsers(userData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
