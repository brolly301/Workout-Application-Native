import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HistoryList from "../components/History/HistoryList";
import useWorkoutContext from "../hooks/useWorkoutContext";
import TrackList from "../components/History/TrackList";

export default function HistoryScreen() {
  const [active, setActive] = useState(true);
  const { getWorkouts, deleteWorkout, state } = useWorkoutContext();

  useEffect(() => {
    getWorkouts();
  }, []);

  const handleDeleteWorkout = async (id, routineID) => {
    deleteWorkout(id, routineID);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setActive(true)}>
          <Text style={styles.buttonText}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActive(false)}>
          <Text style={styles.buttonText}>Runs</Text>
        </TouchableOpacity>
      </View>
      {active ? (
        <HistoryList state={state} handleDeleteWorkout={handleDeleteWorkout} />
      ) : (
        <TrackList />
      )}
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
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
