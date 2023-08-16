import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input field={"Email Address"} setText={setFormData} />
      <Input field={"Password"} setText={setFormData} />
      <TouchableOpacity style={styles.login} setText={setFormData}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        setText={setFormData}
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
    borderRadius: "5%",
    paddingVertical: 10,
  },
  forgotPassword: {
    width: "100%",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
