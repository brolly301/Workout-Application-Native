import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import HistoryList from "../components/History/HistoryList";
import useWorkoutContext from "../hooks/useWorkoutContext";

export default function HistoryScreen() {
  const { getWorkouts } = useWorkoutContext();

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Workouts</Text>
      </TouchableOpacity>
      <HistoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: "100%",
    flex: 1,
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
