import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "flex-start",
  },
  lastMessage: {
    color: "grey",
    fontSize: 16,
    width: "100%",
  },
  time: {
    color: "grey",
    fontSize: 16,
  },
});
