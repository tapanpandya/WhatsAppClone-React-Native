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
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 16,
    alignContent: "flex-start",
  },
  lastMessage: {
    color: "grey",
    fontSize: 14,
    marginLeft: 15,
    width: "100%",
  },
  time: {
    color: "grey",
    fontSize: 16,
  },
});
