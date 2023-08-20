import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Workouts</Text>
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
  },
  subTitle: {
    fontSize: 28,
    fontWeight: "500",
  },
  button: {
    width: "48%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
