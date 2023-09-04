import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkoutCalendar from "../components/Workout/WorkoutCalender";
import QuickStart from "../components/Workout/QuickStart";
import RoutineList from "../components/Routines/RoutineList";
import useUserContext from "../hooks/useUserContext";
import useRoutineContext from "../hooks/useRoutineContext";

export default function WorkoutDashboard() {
  const { state } = useUserContext();
  const { allRoutines } = useRoutineContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Begin Workout</Text>
      <Text style={styles.subTitle}>
        Welcome back, {state.userDetails?.firstName}
      </Text>
      <WorkoutCalendar />
      <QuickStart />
      <Text style={styles.routineText}>Recent Routines</Text>
      <RoutineList allRoutines={allRoutines} limit={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 50,
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
  routineText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
