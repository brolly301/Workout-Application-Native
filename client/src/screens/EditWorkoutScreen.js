import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import AddExercise from "../components/Workout/AddExercise";
import useWorkoutContext from "../hooks/useWorkoutContext";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Routines/RoutineValidation";
import useUserContext from "../hooks/useUserContext";
import HeaderPanel from "../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";
import SaveEditModal from "../components/SaveEditModal";

const EditWorkoutScreen = ({ route }) => {
  const [addExercise, setAddExercise] = useState(false);
  const { setWorkout, editWorkout } = useWorkoutContext();
  const { state: user } = useUserContext();
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const workout = route.params?.workout;

  const [modalVisible, setModalVisible] = useState(false);

  const [newWorkout, setNewWorkout] = useState(workout || {});
  const [workoutText, setWorkoutText] = useState({
    name: workout?.name,
    description: workout?.description,
  });

  const handleUpdateText = (field, text) => {
    setWorkoutText({
      ...workoutText,
      [field]: text,
    });
    setNewWorkout({
      ...newWorkout,
      name: workoutText.name,
      description: workoutText.description,
    });
  };

  const handleValidation = () => {
    setErrors(validation(newWorkout));
  };

  const handleSubmit = () => {
    editWorkout(newWorkout._id, newWorkout, () => {
      navigation.navigate("History");
    });
  };

  const handleExerciseInput = (name, level, category) => {
    const updatedWorkout = { ...newWorkout };
    newWorkout.exercises.push({
      name,
      level,
      category,
      sets: [{ set: 1, kg: "", reps: "" }],
    });
    setNewWorkout(updatedWorkout);
  };

  const removeExercise = (index) => {
    const updatedExercises = newWorkout.exercises.filter((exercise, idx) => {
      return index !== idx;
    });
    setNewWorkout({
      ...newWorkout,
      exercises: updatedExercises,
    });
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const updatedExercises = newWorkout.exercises.map((exercise, idx) => {
      if (idx === exerciseIndex) {
        return {
          ...exercise,
          sets: exercise.sets.filter((set, setIdx) => setIdx !== setIndex),
        };
      }
      return exercise;
    });

    setNewWorkout({
      ...newWorkout,
      exercises: updatedExercises,
    });
  };

  //Take copy of state, use the exercises index to choose that exercise
  //Use set index to specify that exact set then field to update a specific field
  //Then spcify the value to update and use this as an onChangeText event
  const handleExerciseInputChange = (exerciseIndex, setIndex, field, value) => {
    const updatedWorkout = { ...newWorkout };
    updatedWorkout.exercises[exerciseIndex].sets[setIndex][field] = value;
    setNewWorkout(updatedWorkout);
  };

  const handleExerciseNotesChange = (exerciseIndex, field, value) => {
    const updatedWorkout = { ...newWorkout };
    updatedWorkout.exercises[exerciseIndex][field] = value;
    setNewWorkout(updatedWorkout);
  };

  //
  const addSetToExercise = (exerciseIndex) => {
    const updatedWorkout = { ...newWorkout };
    updatedWorkout.exercises[exerciseIndex].sets.push({
      set: updatedWorkout.exercises[exerciseIndex].sets.length + 1,
      kg: "",
      reps: "",
    });
    setNewWorkout(updatedWorkout);
  };

  return (
    <HeaderPanel>
      <SaveEditModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        saveText={"Workout"}
        handleSubmit={handleSubmit}
        handleValidation={handleValidation}
      />
      <View style={styles.headerIcon}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.finishButton}>Save</Text>
        </TouchableOpacity>
      </View>
      {addExercise ? (
        <AddExercise
          setAddExercise={setAddExercise}
          handleSubmit={handleExerciseInput}
        />
      ) : (
        <>
          {errors.name && <Text>{errors.name}</Text>}
          {errors.exercises && <Text>{errors.exercises}</Text>}
          <Text style={styles.title}>Workouts</Text>
          <Text style={styles.subTitle}>Edit Workout</Text>
          <Text style={styles.fieldText}>Name</Text>
          <TextInput
            style={styles.input}
            value={workoutText.name}
            onChangeText={(text) => handleUpdateText("name", text)}
          />
          <Text style={styles.fieldText}>Description</Text>
          <TextInput
            style={styles.input}
            value={workoutText.description}
            onChangeText={(text) => handleUpdateText("description", text)}
          />
          <WorkoutExerciseList
            workoutData={newWorkout}
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
    </HeaderPanel>
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
    borderRadius: 5,
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
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
