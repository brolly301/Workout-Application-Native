import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import useUserContext from "../../hooks/useUserContext";

export default function ProfileSettings() {
  const { logout } = useUserContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "20%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    zIndex: 3,
    elevation: 3,
    borderRadius: "5%",
    top: 70,
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    width: "70%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
