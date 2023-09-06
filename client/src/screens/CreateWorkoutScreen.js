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
import useUserContext from "../hooks/useUserContext";
import useWorkoutContext from "../hooks/useWorkoutContext";
import useExerciseSetsContext from "../hooks/useExerciseSetsContext";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Workout/WorkoutValidation";
import useStateContext from "../hooks/useStateContext";
import FinishModal from "../components/Workout/Modals/FinishModal";
import CancelModal from "../components/Workout/Modals/CancelModal";
import ResetModal from "../components/Workout/Modals/ResetModal";
import AddExerciseModal from "../components/Workout/Modals/AddExerciseModal";
import HeaderPanel from "../components/HeaderPanel";

const CreateWorkoutScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state: user } = useUserContext();
  const [addExercise, setAddExercise] = useState(false);
  const [workoutData, setWorkoutData] = useState({
    userID: user.userDetails._id,
    workoutID: `${user.userDetails._id}${Math.floor(
      Math.random() * 100
    )}${Date.now()}`,
    name: "",
    description: "",
    date: new Date(),
    time: 0,
    exercises: [],
  });

  console.log(workoutData);

  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [finishModalVisible, setFinishlModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);

  const routine = route.params?.routine;

  const { state, addWorkout } = useWorkoutContext();
  const { addExerciseSets } = useExerciseSetsContext();

  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    setErrors(validation(workoutData));
  };

  const handleSubmit = async (callback) => {
    for (let exercise of workoutData.exercises) {
      addExerciseSets({
        userID: user.userDetails._id,
        exerciseName: exercise.name,
        sets: exercise.sets,
      });
    }
    addWorkout(workoutData, () => {
      if (callback) {
        callback();
      }
      navigation.navigate("Workout");
    });
  };

  const removeExercise = (index) => {
    setWorkoutData((prevWorkoutData) => {
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
    setWorkoutData((prevWorkoutData) => {
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

  //Take copy of state, push the exercise into the exercises array and give default set values
  const handleExerciseInput = (name, level, category) => {
    setWorkoutData((prevData) => ({
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

  //Take copy of state, use the exercises index to choose that exercise
  //Use set index to specify that exact set then field to update a specific field
  //Then spcify the value to update and use this as an onChangeText event
  const handleExerciseInputChange = (exerciseIndex, setIndex, field, value) => {
    setWorkoutData((prevData) => ({
      ...prevData,
      exercises: prevData.exercises.map((exercise, idx) => {
        if (idx === exerciseIndex) {
          return {
            ...exercise,
            sets: exercise.sets.map((set, setIdx) => {
              if (setIdx === setIndex) {
                return { ...set, [field]: value };
              }
              return set;
            }),
          };
        }
        return exercise;
      }),
    }));
  };

  const handleExerciseNotesChange = (exerciseIndex, field, value) => {
    setWorkoutData((prevData) => ({
      ...prevData,
      exercises: prevData.exercises.map((exercise, idx) => {
        if (idx === exerciseIndex) {
          return { ...exercise, [field]: value };
        }
        return exercise;
      }),
    }));
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
    <HeaderPanel>
      <View style={styles.headerIcon}>
        <TouchableOpacity
          onPress={() => {
            setCancelModalVisible(!cancelModalVisible);
          }}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setResetModalVisible(!resetModalVisible)}>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFinishlModalVisible(!finishModalVisible);
          }}>
          <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
      </View>
      <AddExerciseModal
        setAddExercise={setAddExercise}
        handleSubmit={handleExerciseInput}
        modalVisible={exerciseModalVisible}
        setModalVisible={setExerciseModalVisible}
      />
      <ResetModal
        modalVisible={resetModalVisible}
        setModalVisible={setResetModalVisible}
      />
      <FinishModal
        modalVisible={finishModalVisible}
        setModalVisible={setFinishlModalVisible}
        handleSubmit={handleSubmit}
        handleValidation={handleValidation}
      />
      <CancelModal
        modalVisible={cancelModalVisible}
        setModalVisible={setCancelModalVisible}
      />

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
          setExerciseModalVisible={setExerciseModalVisible}
          exerciseModalVisible={exerciseModalVisible}
        />
        {workoutData.exercises.length < 3 ? (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setExerciseModalVisible(!exerciseModalVisible)}>
              <Text style={styles.buttonText}>Add Exercise</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </>
    </HeaderPanel>
  );
};

export default CreateWorkoutScreen;

const styles = StyleSheet.create({
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
    borderRadius: 5,
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
  },
  cancelButton: {
    color: "red",
    fontSize: 18,
  },
  resetButton: {
    color: "#D5A8F8",
    fontSize: 18,
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
