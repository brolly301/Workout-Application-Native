import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import useExerciseContext from "../hooks/useExerciseContext";
import validation from "../components/Exercises/ExerciseValidation";
import { useNavigation } from "@react-navigation/native";
import useUserContext from "../hooks/useUserContext";

export default function ExerciseEditScreen({ route }) {
  const { editExercise, state } = useExerciseContext();
  const navigation = useNavigation();
  const { state: user } = useUserContext();

  const id = route.params.id;
  const exercise = state.find((result) => result.exerciseID === id);

  const [name, setName] = useState(exercise?.name);
  const [primaryMuscle, setPrimaryMuscle] = useState(exercise?.primaryMuscle);
  const [secondaryMuscle, setSecondaryMuscle] = useState(
    exercise?.secondaryMuscle
  );
  const [equipment, setEquipment] = useState(exercise?.equipment);
  const [category, setCategory] = useState(exercise?.category);

  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    setErrors(
      validation(name, primaryMuscle, secondaryMuscle, equipment, category)
    );
  };

  const handleSubmit = () => {
    if (!handleValidation())
      try {
        editExercise(
          id,
          exercise.exerciseID,
          user.userDetails._id,
          name,
          primaryMuscle,
          secondaryMuscle,
          equipment,
          category,
          () => {
            navigation.navigate("Exercises");
          }
        );
      } catch (e) {
        console.log("error");
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <Text style={styles.subTitle}>Edit Exercise</Text>
      <Input
        field={"Exercise Name"}
        value={name}
        setText={setName}
        error={errors.name}
      />
      <Spacer />
      <Input
        field={"Primary Muscle"}
        value={primaryMuscle}
        setText={setPrimaryMuscle}
        error={errors.primaryMuscle}
      />
      <Spacer />
      <Input
        field={"Secondary Muscle"}
        value={secondaryMuscle}
        setText={setSecondaryMuscle}
        error={errors.secondaryMuscle}
      />
      <Spacer />
      <Input
        value={equipment}
        field={"Equipment"}
        setText={setEquipment}
        error={errors.equipment}
      />
      <Spacer />
      <Input
        value={category}
        field={"Category"}
        setText={setCategory}
        error={errors.category}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Save Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
});
