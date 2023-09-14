import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Workout/WorkoutValidation";
import useUserContext from "../hooks/useUserContext";
import HeaderPanel from "../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";
import SaveEditModal from "../components/SaveEditModal";
import AddExerciseModal from "../components/Workout/Modals/AddExerciseModal";

const EditWorkoutScreen = ({ route }) => {
  const [addExercise, setAddExercise] = useState(false);
  const { editWorkout } = useWorkoutContext();
  const { state: user } = useUserContext();
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const workout = route.params?.workout;
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [newWorkout, setNewWorkout] = useState({ ...workout });
  const [workoutText, setWorkoutText] = useState({
    name: workout?.name,
    description: workout?.description,
  });

  console.log(workout);
  console.log(newWorkout);

  const handleUpdateText = (field, text) => {
    setWorkoutText({
      ...workoutText,
      [field]: text,
    });
    setNewWorkout({
      ...newWorkout,
      [field]: text, // Use the 'text' parameter directly here
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
    setNewWorkout((prevData) => ({
      ...prevData,
      exercises: [
        ...prevData.exercises,
        {
          name,
          level,
          category,
          sets: [{ set: 1, kg: "", reps: "" }],
        },
      ],
    }));
  };

  const removeExercise = (index) => {
    setNewWorkout((prevWorkoutData) => {
      // Use filter to create a new array without the exercise at the specified index
      const updatedExercises = prevWorkoutData.exercises.filter(
        (exercise, idx) => idx !== index
      );

      return {
        ...prevWorkoutData,
        exercises: updatedExercises,
      };
    });
  };

  const removeSet = (exerciseIndex, setIndex) => {
    setNewWorkout((prevWorkoutData) => {
      const updatedExercises = prevWorkoutData.exercises.map(
        (exercise, idx) => {
          if (idx === exerciseIndex) {
            return {
              ...exercise,
              sets: exercise.sets.filter((set, setIdx) => setIdx !== setIndex),
            };
          }
          return exercise;
        }
      );

      return {
        ...prevWorkoutData,
        exercises: updatedExercises,
      };
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
      <AddExerciseModal
        setAddExercise={setAddExercise}
        handleSubmit={handleExerciseInput}
        modalVisible={exerciseModalVisible}
        setModalVisible={setExerciseModalVisible}
      />
      <SaveEditModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        saveText={"Workout"}
        handleSubmit={handleSubmit}
        handleValidation={handleValidation}
      />
      <View style={styles.headerIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.finishButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Workouts</Text>
      <Text style={styles.subTitle}>Edit Workout</Text>
      {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
      <TextInput
        placeholder="Name"
        style={styles.nameInput}
        value={workoutText.name}
        onChangeText={(text) => handleUpdateText("name", text)}
      />
      <TextInput
        placeholder="Description"
        style={styles.descriptionInput}
        value={workoutText.description}
        onChangeText={(text) => handleUpdateText("description", text)}
      />
      {errors.sets && <Text style={styles.exerciseErrors}>{errors.sets}</Text>}
      {errors.exercises && (
        <Text style={styles.exerciseErrors}>{errors.exercises}</Text>
      )}
      <WorkoutExerciseList
        workoutData={newWorkout}
        handleExerciseInputChange={handleExerciseInputChange}
        handleExerciseNotesChange={handleExerciseNotesChange}
        addSetToExercise={addSetToExercise}
        removeExercise={removeExercise}
        removeSet={removeSet}
        setExerciseModalVisible={setExerciseModalVisible}
        exerciseModalVisible={exerciseModalVisible}
      />
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
  nameInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 35,
    marginBottom: 10,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 50,
    paddingVertical: 7,
    paddingLeft: 7,
    paddingBottom: 25,
  },
  finishButton: {
    color: "#5bc255",
    fontSize: 18,
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errors: {
    color: "red",
    marginBottom: 10,
  },
  exerciseErrors: {
    color: "red",
    marginTop: 10,
  },
});
