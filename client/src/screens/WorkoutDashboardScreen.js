import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkoutCalendar from "../components/Workout/WorkoutCalender";
import QuickStart from "../components/Workout/QuickStart";
import RoutineList from "../components/Routines/RoutineList";
import useUserContext from "../hooks/useUserContext";
import useRoutineContext from "../hooks/useRoutineContext";
import HeaderPanel from "../components/HeaderPanel";
import Spacer from "../components/Spacer";

export default function WorkoutDashboard() {
  const { state } = useUserContext();
  const { state: allRoutines } = useRoutineContext();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderPanel>
        <View style={styles.spacer} />
        <Text style={styles.title}>Begin Workout</Text>
        <Text style={styles.subTitle}>
          Welcome back, {state.userDetails?.firstName}
        </Text>
        <WorkoutCalendar />
        <QuickStart />
        <Text style={styles.routineText}>Recent Routines</Text>
        <RoutineList allRoutines={allRoutines} limit={4} />
        <Spacer />
        <Spacer />
      </HeaderPanel>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  routineText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  spacer: {
    height: 32,
  },
});
