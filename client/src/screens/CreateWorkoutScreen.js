import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import Timer from "../components/Workout/Timer";
import AddExercise from "../components/Workout/AddExercise";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import useStateContext from "../hooks/useStateContext";
import useWorkoutContext from "../hooks/useWorkoutContext";
import useExerciseSetsContext from "../hooks/useExerciseSetsContext";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Workout/WorkoutValidation";

const CreateWorkoutScreen = ({ route }) => {
  const navigation = useNavigation();
  const [addExercise, setAddExercise] = useState(false);
  const [workoutData, setWorkoutData] = useState({
    userID: "12547",
    name: "",
    description: "",
    date: new Date(),
    time: 0,
    exercises: [],
  });

  console.log(workoutData);

  const { state, addWorkout } = useWorkoutContext();
  const { addExerciseSets } = useExerciseSetsContext();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (!handleValidation())
              try {
                handleSubmit();
              } catch (e) {
                console.log(e);
              }
          }}>
          <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
      ),
    });
  }, [workoutData.name]);

  const handleValidation = () => {
    setErrors(validation(workoutData));
  };

  const handleSubmit = () => {
    for (let exercise of workoutData.exercises) {
      addExerciseSets({
        exerciseName: exercise.name,
        sets: exercise.sets,
      });
    }
    addWorkout(workoutData, () => {
      navigation.navigate("Workout");
    });
  };

  const removeExercise = (index) => {
    const updatedExercises = workoutData.exercises.filter(
      (exercise, idx) => index !== idx
    );
    setWorkoutData({
      ...workoutData,
      exercises: updatedExercises,
    });
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const updatedExercises = workoutData.exercises.map((exercise, idx) => {
      if (idx === exerciseIndex) {
        return {
          ...exercise,
          sets: exercise.sets.filter((set, setIdx) => setIdx !== setIndex),
        };
      }
      return exercise;
    });

    setWorkoutData({
      ...workoutData,
      exercises: updatedExercises,
    });
  };

  //Take copy of state, push the exercise into the exercises array and give default set values
  const handleExerciseInput = (name, level, category) => {
    const updatedWorkout = { ...workoutData };
    updatedWorkout.exercises.push({
      name,
      level,
      category,
      sets: [{ set: 1, kg: "", reps: "" }],
    });
    setWorkoutData(updatedWorkout);
  };

  //Take copy of state, use the exercises index to choose that exercise
  //Use set index to specify that exact set then field to update a specific field
  //Then spcify the value to update and use this as an onChangeText event
  const handleExerciseInputChange = (exerciseIndex, setIndex, field, value) => {
    const updatedWorkout = { ...workoutData };
    updatedWorkout.exercises[exerciseIndex].sets[setIndex][field] = value;
    setWorkoutData(updatedWorkout);
  };

  const handleExerciseNotesChange = (exerciseIndex, field, value) => {
    const updatedWorkout = { ...workoutData };
    updatedWorkout.exercises[exerciseIndex][field] = value;
    setWorkoutData(updatedWorkout);
  };

  //
  const addSetToExercise = (exerciseIndex) => {
    const updatedWorkout = { ...workoutData };
    updatedWorkout.exercises[exerciseIndex].sets.push({
      set: updatedWorkout.exercises[exerciseIndex].sets.length + 1,
      kg: "",
      reps: "",
    });
    setWorkoutData(updatedWorkout);
  };

  return (
    <View style={styles.container}>
      {addExercise ? (
        <AddExercise
          setAddExercise={setAddExercise}
          handleSubmit={handleExerciseInput}
        />
      ) : (
        <>
          <View style={styles.timerContainer}>
            <TextInput
              placeholder="Workout 1"
              value={workoutData.name}
              style={styles.title}
              onChangeText={(text) =>
                setWorkoutData({ ...workoutData, name: text })
              }
            />
            <Timer />
          </View>
          {errors.name && <Text>{errors.name}</Text>}
          {errors.exercises && <Text>{errors.exercises}</Text>}
          {errors.sets && <Text>{errors.sets}</Text>}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={workoutData.description}
            onChangeText={(text) =>
              setWorkoutData({ ...workoutData, description: text })
            }
          />
          <WorkoutExerciseList
            workoutData={workoutData}
            handleExerciseInputChange={handleExerciseInputChange}
            handleExerciseNotesChange={handleExerciseNotesChange}
            addSetToExercise={addSetToExercise}
            removeExercise={removeExercise}
            removeSet={removeSet}
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
    color: "black",
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
    // marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  finishButton: {
    color: "lightgreen",
    fontSize: 18,
    marginRight: 20,
  },
});
