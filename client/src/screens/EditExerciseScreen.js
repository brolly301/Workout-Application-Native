import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import useExerciseContext from "../hooks/useExerciseContext";
import validation from "../components/Exercises/ExerciseValidation";
import { useNavigation } from "@react-navigation/native";
import useUserContext from "../hooks/useUserContext";
import HeaderPanel from "../components/HeaderPanel";
import SaveEditModal from "../components/SaveEditModal";
import { Ionicons } from "@expo/vector-icons";

export default function ExerciseEditScreen({ route }) {
  const { editExercise, state } = useExerciseContext();
  const navigation = useNavigation();
  const { state: user } = useUserContext();

  const id = route.params.id;
  const exercise = state.find((result) => result.exerciseID === id);

  const [name, setName] = useState(exercise?.name);
  const [primaryMuscles, setPrimaryMuscles] = useState(
    exercise?.primaryMuscles[0]
  );
  const [secondaryMuscles, setSecondaryMuscles] = useState(
    exercise?.secondaryMuscles[0]
  );
  const [equipment, setEquipment] = useState(exercise?.equipment);
  const [category, setCategory] = useState(exercise?.category);
  const [force, setForce] = useState(exercise?.force);
  const [mechanic, setMechanic] = useState(exercise?.mechanic);
  const [level, setLevel] = useState(exercise?.level);

  const [errors, setErrors] = useState({});

  const [modalVisible, setModalVisible] = useState(false);

  const handleValidation = () => {
    setErrors(validation(name, primaryMuscles));
  };

  const exerciseData = {
    id: exercise._id,
    exerciseID: exercise.exerciseID,
    name,
    primaryMuscles,
    secondaryMuscles,
    equipment,
    category,
    force,
    mechanic,
    level,
  };

  const handleSubmit = () => {
    try {
      editExercise(exerciseData, () => {
        navigation.navigate("Exercises");
      });
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <HeaderPanel>
      <SaveEditModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        saveText={"Exercise"}
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
      <View style={styles.container}>
        <Text style={styles.title}>Exercises</Text>
        <Text style={styles.subTitle}>Edit Exercise</Text>
        <Input
          field={"Exercise Name"}
          value={name}
          setText={setName}
          error={errors.name}
        />
        <Input
          field={"Primary Muscle"}
          value={primaryMuscles}
          setText={setPrimaryMuscles}
          error={errors.primaryMuscle}
        />
        <Input
          field={"Secondary Muscle"}
          value={secondaryMuscles}
          setText={setSecondaryMuscles}
        />
        <Input value={equipment} field={"Equipment"} setText={setEquipment} />
        <Input value={category} field={"Category"} setText={setCategory} />

        <Input value={force} field={"Force"} setText={setForce} />

        <Input value={mechanic} field={"Mechanic"} setText={setMechanic} />

        <Input value={level} field={"Level"} setText={setLevel} />
      </View>
    </HeaderPanel>
  );
}

const styles = StyleSheet.create({
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
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  finishButton: {
    color: "#5bc255",
    fontSize: 18,
  },
});
