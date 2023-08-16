import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";

export default function RegisterScreen() {
  const [formData, setFormData] = useState();

  return (
    <View>
      <Text>RegisterScreen</Text>
      <Input field={"First Name"} setText={setFormData} />
      <Input field={"Last Name"} setText={setFormData} />
      <Input field={"Email Address"} setText={setFormData} />
      <Input field={"Password"} setText={setFormData} />
      <Button title='Register' />
    </View>
  );
}

const styles = StyleSheet.create({});
