import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import RoutineStart from "./RoutineStart";
import RoutineModal from "./Modals/RoutineModal";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import Spacer from "../Spacer";

export default function RoutineShow({ routine }) {
  const [isActive, setIsActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { state } = useWorkoutContext();

  const workoutsCompleted = Array.isArray(state)
    ? state.filter((workout) => workout.routineID === routine.routineID)
    : [];

  return (
    <>
      <RoutineModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        routine={routine}
      />
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.name}>
              {routine?.name}
            </Text>
            <Text numberOfLines={1} style={styles.description}>
              {routine?.description}
            </Text>
            <Spacer />
            <Text style={styles.workoutExercise}>
              Exercises: {routine?.exercises.length}{" "}
            </Text>
            <Text style={styles.workoutExercise}>
              Workouts: {workoutsCompleted?.length || 0}{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 7,
    width: 185,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },

  textContainer: {
    padding: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
  workoutExercise: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
