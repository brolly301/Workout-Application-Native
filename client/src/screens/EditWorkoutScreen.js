import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import AddExercise from "../components/Workout/AddExercise";
import useRoutineContext from "../hooks/useRoutineContext";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Routines/RoutineValidation";
import useUserContext from "../hooks/useUserContext";

const EditWorkoutScreen = ({ route }) => {
  const [addExercise, setAddExercise] = useState(false);
  const { setRoutine, editRoutine } = useRoutineContext();
  const { state: user } = useUserContext();
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const routine = route.params?.routine;

  const [newRoutine, setNewRoutine] = useState(routine || {});
  const [routineText, setRoutineText] = useState({
    name: routine?.name,
    description: routine?.description,
  });

  const handleUpdateText = (field, text) => {
    setRoutineText({
      ...routineText,
      [field]: text,
    });
    setNewRoutine({
      ...newRoutine,
      name: routineText.name,
      description: routineText.description,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (!handleValidation()) {
              try {
                handleSubmit();
              } catch (e) {
                console.log(e);
              }
            }
          }}>
          <Text style={styles.finishButton}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [routine.name]);

  const handleValidation = () => {
    setErrors(validation(routine));
  };

  const handleSubmit = () => {
    editRoutine(newRoutine._id, newRoutine, () => {
      navigation.navigate("Routines");
    });
  };

  const handleExerciseInput = (name, level, category) => {
    const updatedRoutine = { ...newRoutine };
    newRoutine.exercises.push({
      name,
      level,
      category,
      sets: [{ set: 1, kg: "", reps: "" }],
    });
    setNewRoutine(updatedRoutine);
  };

  const removeExercise = (index) => {
    const updatedExercises = newRoutine.exercises.filter((exercise, idx) => {
      return index !== idx;
    });
    setNewRoutine({
      ...newRoutine,
      exercises: updatedExercises,
    });
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const updatedExercises = newRoutine.exercises.map((exercise, idx) => {
      if (idx === exerciseIndex) {
        return {
          ...exercise,
          sets: exercise.sets.filter((set, setIdx) => setIdx !== setIndex),
        };
      }
      return exercise;
    });

    setNewRoutine({
      ...newRoutine,
      exercises: updatedExercises,
    });
  };

  //Take copy of state, use the exercises index to choose that exercise
  //Use set index to specify that exact set then field to update a specific field
  //Then spcify the value to update and use this as an onChangeText event
  const handleExerciseInputChange = (exerciseIndex, setIndex, field, value) => {
    const updatedRoutine = { ...newRoutine };
    updatedRoutine.exercises[exerciseIndex].sets[setIndex][field] = value;
    setNewRoutine(updatedRoutine);
  };

  const handleExerciseNotesChange = (exerciseIndex, field, value) => {
    const updatedRoutine = { ...newRoutine };
    updatedRoutine.exercises[exerciseIndex][field] = value;
    setNewRoutine(updatedRoutine);
  };

  //
  const addSetToExercise = (exerciseIndex) => {
    const updatedRoutine = { ...newRoutine };
    updatedRoutine.exercises[exerciseIndex].sets.push({
      set: updatedRoutine.exercises[exerciseIndex].sets.length + 1,
      kg: "",
      reps: "",
    });
    setNewRoutine(updatedRoutine);
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
          {errors.name && <Text>{errors.name}</Text>}
          {errors.exercises && <Text>{errors.exercises}</Text>}
          <Text style={styles.title}>Routines</Text>
          <Text style={styles.subTitle}>Create Routine</Text>
          <Text style={styles.fieldText}>Name</Text>
          <TextInput
            style={styles.input}
            value={routineText.name}
            onChangeText={(text) => handleUpdateText("name", text)}
          />
          <Text style={styles.fieldText}>Description</Text>
          <TextInput
            style={styles.input}
            value={routineText.description}
            onChangeText={(text) => handleUpdateText("description", text)}
          />
          <WorkoutExerciseList
            workoutData={newRoutine}
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

export default EditWorkoutScreen;

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
  fieldText: {
    fontSize: 18,
    marginVertical: 2,
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
    height: 35,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  finishButton: {
    color: "lightgreen",
    fontSize: 18,
    marginRight: 20,
  },
});
