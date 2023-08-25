import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkoutCalendar from "../components/Workout/WorkoutCalender";
import QuickStart from "../components/Workout/QuickStart";
import RoutineList from "../components/Routines/RoutineList";

export default function WorkoutDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Begin Workout</Text>
      <Text style={styles.subTitle}>Welcome back, Marc!</Text>
      <WorkoutCalendar />
      <QuickStart />
      <Text>Recent Routines</Text>
      <RoutineList limit={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
