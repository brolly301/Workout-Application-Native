import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HistoryList from "../components/History/HistoryList";
import useWorkoutContext from "../hooks/useWorkoutContext";
import TrackList from "../components/History/TrackList";
import HeaderPanel from "../components/HeaderPanel";

export default function HistoryScreen() {
  const [active, setActive] = useState(true);
  const { getWorkouts, deleteWorkout, state } = useWorkoutContext();

  useEffect(() => {
    getWorkouts();
  }, []);

  const handleDeleteWorkout = async (id, workoutID) => {
    await deleteWorkout(id, workoutID);
  };

  return (
    <HeaderPanel>
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
      <Text style={styles.subTitle}>All Workouts</Text>
      {active ? (
        <HistoryList state={state} handleDeleteWorkout={handleDeleteWorkout} />
      ) : (
        <TrackList />
      )}
    </HeaderPanel>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 28,
    fontWeight: "500",
  },
  button: {
    width: "48%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    marginTop: 10,
    fontSize: 18,
  },
});
