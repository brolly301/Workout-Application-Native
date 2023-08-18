import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MultilineInput from "../components/MultilineInput";

const CreateRoutineScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routines</Text>
      <Text style={styles.subTitle}>Create Routine</Text>
      <MultilineInput field={"Description"} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRoutineScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: "100%",
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
    marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
