import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ExerciseAbout from "../components/Exercises/ExerciseAbout";
import ExerciseHistory from "../components/Exercises/ExerciseHistory";
import useExerciseContext from "../hooks/useExerciseContext";
import useExerciseSetsContext from "../hooks/useExerciseSetsContext";
import HeaderPanel from "../components/HeaderPanel";
import { Ionicons } from "@expo/vector-icons";

const ExerciseShowScreen = ({ route }) => {
  const [selected, setSelected] = useState(true);
  const { state: exerciseSets, getExerciseSets } = useExerciseSetsContext();

  const navigation = useNavigation();

  useEffect(() => {
    getExerciseSets();
  }, []);

  const { state } = useExerciseContext();
  const id = route.params.id;

  const exercise = state.find((result) => result.id === id);

  const handleSelected = (boolean) => {
    setSelected(boolean);
  };

  let content = <ExerciseHistory exercise={exercise} />;
  if (!selected && exercise.force === "") {
    content = <ExerciseHistory exercise={exercise} />;
  }

  return (
    <HeaderPanel>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Ionicons name="arrow-back" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Exercises</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSelected(true)}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSelected(false)}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
      {content}
    </HeaderPanel>
  );
};

export default ExerciseShowScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  button: {
    width: "48%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
