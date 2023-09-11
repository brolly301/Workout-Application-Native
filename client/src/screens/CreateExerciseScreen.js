import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import useExerciseContext from "../hooks/useExerciseContext";
import validation from "../components/Exercises/ExerciseValidation";
import { useNavigation } from "@react-navigation/native";
import useUserContext from "../hooks/useUserContext";
import CancelExerciseModal from "../components/Exercises/Modals/CancelExerciseModal";
import SaveExerciseModal from "../components/Exercises/Modals/SaveExerciseModal";
import HeaderPanel from "../components/HeaderPanel";

export default function CreateExerciseScreen() {
  const { addExercise, state } = useExerciseContext();
  const navigation = useNavigation();
  const { state: user } = useUserContext();

  const [name, setName] = useState("");
  const [primaryMuscle, setPrimaryMuscle] = useState("");
  const [secondaryMuscle, setSecondaryMuscle] = useState("");
  const [equipment, setEquipment] = useState("");
  const [category, setCategory] = useState("");

  const [errors, setErrors] = useState({});
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  const handleValidation = () => {
    setErrors(
      validation(name, primaryMuscle, secondaryMuscle, equipment, category)
    );
  };

  const handleSubmit = () => {
    addExercise(
      user.userDetails._id,
      `${user.userDetails._id}${Math.floor(
        Math.random() * 100000
      )}${Date.now()}`,
      name,
      primaryMuscle,
      secondaryMuscle,
      equipment,
      category,
      () => {
        navigation.navigate("Exercises");
      }
    );
  };

  return (
    <>
      <CancelExerciseModal
        modalVisible={cancelModalVisible}
        setModalVisible={setCancelModalVisible}
      />
      <SaveExerciseModal
        modalVisible={saveModalVisible}
        setModalVisible={setSaveModalVisible}
        handleSubmit={handleSubmit}
        handleValidation={handleValidation}
      />
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
        <Text style={styles.title}>Exercises</Text>
        <Text style={styles.subTitle}>Create New Exercise</Text>
        <Input field={"Exercise Name"} setText={setName} error={errors.name} />
        <Spacer />
        <Input
          field={"Primary Muscle"}
          setText={setPrimaryMuscle}
          error={errors.primaryMuscle}
        />
        <Spacer />
        <Input
          field={"Secondary Muscle"}
          setText={setSecondaryMuscle}
          error={errors.secondaryMuscle}
        />
        <Spacer />
        <Input
          field={"Equipment"}
          setText={setEquipment}
          error={errors.equipment}
        />
        <Spacer />
        <Input
          field={"Category"}
          setText={setCategory}
          error={errors.category}
        />
      </HeaderPanel>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
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
    borderRadius: 5,

    paddingVertical: 8,
    marginTop: 10,
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
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
