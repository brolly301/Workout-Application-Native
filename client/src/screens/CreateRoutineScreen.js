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

const CreateRoutineScreen = () => {
  const [addExercise, setAddExercise] = useState(false);
  const { routine, setRoutine, addRoutine } = useRoutineContext();
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

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
    addRoutine(routine, () => {
      navigation.navigate("Routines");
    });
  };

  const handleExerciseInput = (name, level, category) => {
    const updatedRoutine = { ...routine };
    updatedRoutine.exercises.push({
      name,
      level,
      category,
      sets: [{ set: 1, kg: "", reps: "" }],
    });
    setRoutine(updatedRoutine);
  };

  const removeExercise = (index) => {
    const updatedExercises = routine.exercises.filter(
      (exercise, idx) => index !== idx
    );
    setRoutine({
      ...routine,
      exercises: updatedExercises,
    });
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const updatedExercises = routine.exercises.map((exercise, idx) => {
      if (idx === exerciseIndex) {
        return {
          ...exercise,
          sets: exercise.sets.filter((set, setIdx) => setIdx !== setIndex),
        };
      }
      return exercise;
    });

    setRoutine({
      ...routine,
      exercises: updatedExercises,
    });
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
            value={routine.name}
            onChangeText={(text) => setRoutine({ ...routine, name: text })}
          />
          <Text style={styles.fieldText}>Description</Text>
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
