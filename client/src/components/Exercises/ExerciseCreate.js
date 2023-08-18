import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../Input";
import Spacer from "../Spacer";

export default function ExerciseCreate() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    category: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <Text style={styles.subTitle}>Create New Exercise</Text>
      <Input field={"Exercise Name"} setText={setFormData} />
      <Spacer />
      <Input field={"Body Part"} setText={setFormData} />
      <Spacer />
      <Input field={"Category"} setText={setFormData} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
