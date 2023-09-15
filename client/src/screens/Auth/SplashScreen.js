import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.login}
            title="Login"
            onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.register}
            title="Register"
            onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
    width: "90.5%",
    borderWidth: 1,
    backgroundColor: "rgba(213, 168, 248, 0.8)",
    borderColor: "black",
    borderRadius: 5,
    paddingVertical: 11,
    marginVertical: 5,
    // opacity: 0.8,
  },
  register: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
    marginBottom: 40,
    marginTop: 10,
    borderColor: "white",
  },
  loginText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  registerText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
