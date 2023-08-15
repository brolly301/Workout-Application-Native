import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import AuthInput from "../../components/AuthInput";

export default function RegisterScreen() {
  const [formData, setFormData] = useState();

  return (
    <View>
      <Text>RegisterScreen</Text>
      <AuthInput field={"First Name"} setText={setFormData} />
      <AuthInput field={"Last Name"} setText={setFormData} />
      <AuthInput field={"Email Address"} setText={setFormData} />
      <AuthInput field={"Password"} setText={setFormData} />
      <Button title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({});
