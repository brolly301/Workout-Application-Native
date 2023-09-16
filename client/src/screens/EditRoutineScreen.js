import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import useRoutineContext from "../hooks/useRoutineContext";
import WorkoutExerciseList from "../components/Workout/WorkoutExerciseList";
import { useNavigation } from "@react-navigation/native";
import validation from "../components/Routines/RoutineValidation";
import HeaderPanel from "../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";
import SaveEditModal from "../components/SaveEditModal";
import AddExerciseModal from "../components/Workout/Modals/AddExerciseModal";
import { handleExerciseInput } from "../components/WorkoutFunctions";

const EditRoutineScreen = ({ route }) => {
  const { editRoutine } = useRoutineContext();
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const routine = route.params?.routine;

  const [exerciseModalVisible, setExerciseModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [newRoutine, setNewRoutine] = useState({ ...routine });
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

  const handleValidation = () => {
    setErrors(validation(newRoutine));
  };

  const handleSubmit = () => {
    editRoutine(newRoutine._id, newRoutine, () => {
      navigation.navigate("Routines");
    });
  };

  return (
    <HeaderPanel>
      <AddExerciseModal
        handleSubmit={handleExerciseInput}
        modalVisible={exerciseModalVisible}
        setModalVisible={setExerciseModalVisible}
        setState={setNewRoutine}
      />
      <SaveEditModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        saveText={"Routine"}
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

      <Text style={styles.title}>Routines</Text>
      <Text style={styles.subTitle}>Edit Routine</Text>
      {errors.name && <Text style={styles.errors}>{errors.name}</Text>}

      <TextInput
        placeholder="Name"
        style={styles.nameInput}
        value={routineText.name}
        onChangeText={(text) => handleUpdateText("name", text)}
      />
      <TextInput
        placeholder="Description"
        style={styles.descriptionInput}
        value={routineText.description}
        onChangeText={(text) => handleUpdateText("description", text)}
      />
      {errors.exercises && (
        <Text style={styles.exerciseErrors}>{errors.exercises}</Text>
      )}

      <WorkoutExerciseList
        state={newRoutine}
        setState={setNewRoutine}
        setExerciseModalVisible={setExerciseModalVisible}
        exerciseModalVisible={exerciseModalVisible}
      />
    </HeaderPanel>
  );
};

export default EditRoutineScreen;

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
