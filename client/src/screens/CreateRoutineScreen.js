import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import useRoutineContext from "../hooks/useRoutineContext";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Routines/RoutineValidation";
import useUserContext from "../hooks/useUserContext";
import CancelRoutineModal from "../components/Routines/Modals/CancelRoutineModal";
import SaveRoutineModal from "../components/Routines/Modals/SaveRoutineModal";
import AddExerciseModal from "../components/Workout/Modals/AddExerciseModal";
import HeaderPanel from "../components/HeaderPanel";

const CreateRoutineScreen = () => {
  const { routine, setRoutine, addRoutine } = useRoutineContext();
  const { state: user } = useUserContext();
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);

  const handleValidation = () => {
    setErrors(validation(routine));
  };

  const handleSubmit = () => {
    addRoutine(routine, () => {
      setRoutine({
        routineID: "",
        userID: "",
        name: "",
        description: "",
        date: new Date(),
        exercises: [],
      });
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

  return (
    <HeaderPanel>
      <View style={styles.headerIcon}>
        <TouchableOpacity
          onPress={() => {
            setCancelModalVisible(!cancelModalVisible);
          }}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSaveModalVisible(!saveModalVisible)}>
          <Text style={styles.finishButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <>
        <AddExerciseModal
          handleSubmit={handleExerciseInput}
          modalVisible={exerciseModalVisible}
          setModalVisible={setExerciseModalVisible}
        />
        <CancelRoutineModal
          modalVisible={cancelModalVisible}
          setModalVisible={setCancelModalVisible}
          setRoutine={setRoutine}
        />
        <SaveRoutineModal
          modalVisible={saveModalVisible}
          setModalVisible={setSaveModalVisible}
          handleSubmit={handleSubmit}
          handleValidation={handleValidation}
        />

        <Text style={styles.title}>Routines</Text>
        <Text style={styles.subTitle}>Create Routine</Text>
        {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
        <TextInput
          style={styles.nameInput}
          value={routine.name}
          placeholder="Name"
          onChangeText={(text) =>
            setRoutine({
              ...routine,
              name: text,
              userID: user.userDetails._id,
              routineID: `${user.userDetails._id}${
                Math.floor(Math.random() * 100) + Date.now()
              }`,
            })
          }
        />
        <TextInput
          placeholder="Description"
          style={styles.descriptionInput}
          value={routine.description}
          onChangeText={(text) => setRoutine({ ...routine, description: text })}
        />
        {errors.exercises && (
          <Text style={styles.exerciseErrors}>{errors.exercises}</Text>
        )}
        <WorkoutExerciseList
          workoutData={routine}
          handleExerciseInputChange={handleExerciseInputChange}
          handleExerciseNotesChange={handleExerciseNotesChange}
          addSetToExercise={addSetToExercise}
          removeExercise={removeExercise}
          removeSet={removeSet}
          exerciseModalVisible={exerciseModalVisible}
          setExerciseModalVisible={setExerciseModalVisible}
        />
      </>
    </HeaderPanel>
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
  cancelButton: {
    color: "red",
    fontSize: 18,
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
