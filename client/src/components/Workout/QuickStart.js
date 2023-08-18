import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function QuickStart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Start</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>New Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Track Run</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
