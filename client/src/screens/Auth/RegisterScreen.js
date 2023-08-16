import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";

export default function RegisterScreen() {
  const [formData, setFormData] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Input field={"First Name"} setText={setFormData} />
      <Input field={"Last Name"} setText={setFormData} />
      <Input field={"Email Address"} setText={setFormData} />
      <Input field={"Password"} setText={setFormData} />
      <TouchableOpacity style={styles.register}>
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
