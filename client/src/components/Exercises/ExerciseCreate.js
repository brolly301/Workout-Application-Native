import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../Input";
import Spacer from "../Spacer";
import useExerciseContext from "../../hooks/useExerciseContext";

export default function ExerciseCreate() {
  const { addExercise, state } = useExerciseContext();

  const [name, setName] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [category, setCategory] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <Text style={styles.subTitle}>Create New Exercise</Text>
      <Input field={"Exercise Name"} setText={setName} />
      <Spacer />
      <Input field={"Body Part"} setText={setBodyPart} />
      <Spacer />
      <Input field={"Category"} setText={setCategory} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addExercise(name, bodyPart, category)}>
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
