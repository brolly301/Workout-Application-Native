import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState();

  return (
    <View>
      <Text>LoginScreen</Text>
      <Input field={"Email Address"} setText={setFormData} />
      <Input field={"Password"} setText={setFormData} />
      <TouchableOpacity style={styles.login} setText={setFormData}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        setText={setFormData}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  login: {
    width: "90%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
  },
  forgotPassword: {
    width: "90%",
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
