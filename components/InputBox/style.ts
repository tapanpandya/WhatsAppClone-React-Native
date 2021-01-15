import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,

    borderRadius: 50,
    marginRight: 10,
    flex: 1,
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 8,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginRight: 50,
    borderRadius: 5,
  },
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});
