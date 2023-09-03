import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import useUserContext from "../../hooks/useUserContext";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { state, login } = useUserContext();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input field={"Email Address"} setText={setEmail} />
      <Input field={"Password"} setText={setPassword} />
      {state.errorMessage && (
        <Text style={styles.error}>{state.errorMessage}</Text>
      )}
      <TouchableOpacity
        style={styles.login}
        onPress={() =>
          login({ email, password }, () => {
            // navigation.navigate("Tabs");
          })
        }>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  login: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
  },
  forgotPassword: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  error: {
    color: "red",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
