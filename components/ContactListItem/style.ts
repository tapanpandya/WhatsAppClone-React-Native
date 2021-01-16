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
    marginRight: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    alignContent: "flex-start",
  },
  status: {
    fontSize: 16,
    color: "black",
  },
});
