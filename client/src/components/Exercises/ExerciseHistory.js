import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExerciseHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Mon, 24 August 2023</Text>
      <View style={styles.hr} />
      <View style={styles.headerContainer}>
        <Text style={styles.setText}>Set</Text>
        <Text style={styles.setText}>kg</Text>
        <Text style={styles.setText}>Reps</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  date: {},
  setHeading: {},
  setText: {},
  headerContainer: {},
});
