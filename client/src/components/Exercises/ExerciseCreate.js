import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../Input";

export default function ExerciseCreate() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    category: "",
  });

  return (
    <View>
      <Text>Create New Exercise</Text>
      <Input field={"Exercise Name"} setText={setFormData} />
      <Input field={"Body Part"} setText={setFormData} />
      <Input field={"Category"} setText={setFormData} />
      <Button title='Save' />
    </View>
  );
}

const styles = StyleSheet.create({});
