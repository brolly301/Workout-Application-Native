import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import AddExercise from "../components/Workout/AddExercise";
import useRoutineContext from "../hooks/useRoutineContext";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";

const CreateRoutineScreen = () => {
  const [addExercise, setAddExercise] = useState(false);
  const { routine, setRoutine } = useRoutineContext();

  const handleSubmit = (name, level, category) => {
    const updatedRoutine = { ...routine };
    updatedRoutine.exercises.push({
      name,
      level,
      category,
      sets: [{ set: 1, kg: "", reps: "" }],
    });
    setRoutine(updatedRoutine);
  };

  //Take copy of state, use the exercises index to choose that exercise
  //Use set index to specify that exact set then field to update a specific field
  //Then spcify the value to update and use this as an onChangeText event
  const handleExerciseInputChange = (exerciseIndex, setIndex, field, value) => {
    const updatedRoutine = { ...routine };
    updatedRoutine.exercises[exerciseIndex].sets[setIndex][field] = value;
    setRoutine(updatedRoutine);
  };

  const handleExerciseNotesChange = (exerciseIndex, field, value) => {
    const updatedRoutine = { ...routine };
    updatedRoutine.exercises[exerciseIndex][field] = value;
    setRoutine(updatedRoutine);
  };

  //
  const addSetToExercise = (exerciseIndex) => {
    const updatedRoutine = { ...routine };
    updatedRoutine.exercises[exerciseIndex].sets.push({
      set: updatedRoutine.exercises[exerciseIndex].sets.length + 1,
      kg: "",
      reps: "",
    });
    setRoutine(updatedRoutine);
  };

  console.log(routine);

  return (
    <View style={styles.container}>
      {addExercise ? (
        <AddExercise
          setAddExercise={setAddExercise}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <Text style={styles.title}>Routines</Text>
          <Text style={styles.subTitle}>Create Routine</Text>
          <TextInput
            style={styles.input}
            value={routine.description}
            onChangeText={(text) =>
              setRoutine({ ...routine, description: text })
            }
          />
          <WorkoutExerciseList
            workoutData={routine}
            handleExerciseInputChange={handleExerciseInputChange}
            handleExerciseNotesChange={handleExerciseNotesChange}
            addSetToExercise={addSetToExercise}
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

export default CreateRoutineScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
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
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 60,
    paddingVertical: 7,
    paddingLeft: 7,
  },
});
