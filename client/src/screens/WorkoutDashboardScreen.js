import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import WorkoutCalendar from "../components/Workout/WorkoutCalender";
import QuickStart from "../components/Workout/QuickStart";
import RoutineList from "../components/Routines/RoutineList";
import useUserContext from "../hooks/useUserContext";
import useRoutineContext from "../hooks/useRoutineContext";
import HeaderPanel from "../components/HeaderPanel";
import Spacer from "../components/Spacer";
import WorkoutSummaryModal from "../components/Workout/Modals/WorkoutSummaryModal";
import TrackSummaryModal from "../components/Tracks/TrackSummaryModal";

export default function WorkoutDashboard({ route }) {
  const workout = route?.params?.workout;
  const track = route?.params?.track;

  const { state } = useUserContext();
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [isWorkout, setIsWorkout] = useState(false);
  const [trackModalVisible, setTrackModalVisible] = useState(false);
  const [isTrack, setIsTrack] = useState(false);
  const { state: allRoutines } = useRoutineContext();

  useEffect(() => {
    if (workout) {
      setWorkoutModalVisible(true);
    } else if (track) {
      setTrackModalVisible(true);
    }
  }, [workout, track]);

  const closeModalAndResetWorkout = () => {
    setWorkoutModalVisible(false);
    setIsWorkout(false);
  };
  const closeModalAndResetTrack = () => {
    setTrackModalVisible(false);
    setIsTrack(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WorkoutSummaryModal
        modalVisible={workoutModalVisible}
        setModalVisible={closeModalAndResetWorkout}
        routine={workout}
      />
      <TrackSummaryModal
        modalVisible={trackModalVisible}
        setModalVisible={closeModalAndResetTrack}
        item={track}
      />
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
