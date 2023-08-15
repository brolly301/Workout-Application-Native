import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import AuthInput from "../../components/AuthInput";

export default function LoginScreen() {
  const [formData, setFormData] = useState();

  return (
    <View>
      <Text>LoginScreen</Text>
      <AuthInput field={"Email Address"} setText={setFormData} />
      <AuthInput field={"Password"} setText={setFormData} />
      <Button title="Login" setText={setFormData} />
      <Button title="Forgot Password?" setText={setFormData} />
    </View>
  );
}

const styles = StyleSheet.create({});
