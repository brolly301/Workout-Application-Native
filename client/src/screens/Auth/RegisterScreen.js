import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import useUserContext from "../../hooks/useUserContext";

export default function RegisterScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { register } = useUserContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Input field={"First Name"} setText={setFirstName} />
      <Input field={"Last Name"} setText={setLastName} />
      <Input field={"Email Address"} setText={setEmail} />
      <Input field={"Password"} setText={setPassword} />
      <TouchableOpacity
        style={styles.register}
        onPress={() => register({ email, password })}>
        <Text style={styles.buttonText}>Register</Text>
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
  register: {
    width: "100%",
    backgroundColor: "#D5A8F8",
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