import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Timer from "../components/Workout/Timer";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import useUserContext from "../hooks/useUserContext";
import useWorkoutContext from "../hooks/useWorkoutContext";
import useExerciseSetsContext from "../hooks/useExerciseSetsContext";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Workout/WorkoutValidation";
import FinishModal from "../components/Workout/Modals/FinishModal";
import CancelModal from "../components/Workout/Modals/CancelModal";
import ResetModal from "../components/Workout/Modals/ResetModal";
import AddExerciseModal from "../components/Workout/Modals/AddExerciseModal";
import HeaderPanel from "../components/HeaderPanel";
import { handleExerciseInput } from "../components/WorkoutFunctions";

const CreateWorkoutScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state: user } = useUserContext();
  const { state, addWorkout } = useWorkoutContext();
  const [newTime, setNewTime] = useState(0);
  const routine = route.params?.routine;
  const calenderDate = route.params?.calenderDate;

  const [workoutData, setWorkoutData] = useState({
    userID: user.userDetails._id,
    workoutID: `${user.userDetails._id}${Math.floor(
      Math.random() * 100
    )}${Date.now()}`,
    name: `Workout ${state?.length + 1}`,
    description: "",
    date: calenderDate ? new Date(calenderDate) : new Date(),
    time: newTime,
    exercises: [],
  });

  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [finishModalVisible, setFinishlModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);
  const { addExerciseSets } = useExerciseSetsContext();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (routine) {
      setWorkoutData({ ...workoutData, ...routine, _id: null });
    }
  }, []);

  const handleChangeTime = (time) => {
    setWorkoutData((prevWorkoutData) => ({
      ...prevWorkoutData,
      time,
    }));
  };

  const handleValidation = () => {
    setErrors(validation(workoutData));
  };

  const handleSubmit = async (callback) => {
    for (let exercise of workoutData.exercises) {
      addExerciseSets({
        userID: user.userDetails._id,
        exerciseName: exercise.name,
        date: workoutData.date,
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
        handleSubmit={handleExerciseInput}
        modalVisible={exerciseModalVisible}
        setModalVisible={setExerciseModalVisible}
        setState={setWorkoutData}
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
        handleChangeTime={handleChangeTime}
      />
      <CancelModal
        modalVisible={cancelModalVisible}
        setModalVisible={setCancelModalVisible}
      />

      <>
        {errors.name && <Text style={styles.errors}>{errors.name}</Text>}

        <View style={styles.timerContainer}>
          <TextInput
            value={workoutData.name}
            style={styles.title}
            onChangeText={(text) =>
              setWorkoutData({ ...workoutData, name: text })
            }
          />
          <Timer />
        </View>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={3}
          value={workoutData.description}
          placeholder="Description"
          onChangeText={(text) =>
            setWorkoutData({ ...workoutData, description: text })
          }
        />
        {errors.sets && (
          <Text style={styles.exerciseErrors}>{errors.sets}</Text>
        )}
        {errors.exercises && (
          <Text style={styles.exerciseErrors}>{errors.exercises}</Text>
        )}
        <WorkoutExerciseList
          state={workoutData}
          setState={setWorkoutData}
          setExerciseModalVisible={setExerciseModalVisible}
          exerciseModalVisible={exerciseModalVisible}
        />
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
    paddingBottom: 30,
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
    color: "#5bc255",
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
  errors: {
    color: "red",
    marginBottom: 10,
  },
  exerciseErrors: {
    color: "red",
    marginTop: 10,
  },
});
