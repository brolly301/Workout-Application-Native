import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.login}
          title="Login"
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          title="Register"
          onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  login: {
    width: "90%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
    marginVertical: 5,
  },
  register: {
    width: "90%",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
    marginVertical: 5,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
