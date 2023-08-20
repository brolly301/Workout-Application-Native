import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Timer from "../components/Workout/Timer";
import MultilineInput from "../components/MultilineInput";
import AddExercise from "../components/Workout/AddExercise";
import WorkoutExercise from "../components/Workout/WorkoutExercise";

const CreateWorkoutScreen = () => {
  const [addExercise, setAddExercise] = useState(false);
  const [exerciseData, setExerciseData] = useState([]);

  const handleSubmit = (name, category, level) => {
    setExerciseData([
      ...exerciseData,
      {
        id: Math.floor(Math.random() * 100000),
        name,
        category,
        level,
        sets: [
          {
            id: Math.floor(Math.random() * 100000),
            set: 1,
            previous: "60 x 10",
            kg: 60,
            reps: 10,
          },
        ],
      },
    ]);
  };

  console.log(exerciseData);

  return (
    <View style={styles.container}>
      {addExercise ? (
        <AddExercise
          setAddExercise={setAddExercise}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <View style={styles.timerContainer}>
            <Text style={styles.title}>Workout - 1</Text>
            <Timer />
          </View>
          <MultilineInput field={"Description"} />
          <WorkoutExercise
            exerciseData={exerciseData}
            setExerciseData={setExerciseData}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => setAddExercise(true)}>
            <Text style={styles.buttonText}>Add Exercise</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CreateWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 18,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 60,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
