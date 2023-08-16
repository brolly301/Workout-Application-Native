import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useResult from "../hooks/useResult";
import ExerciseAbout from "../components/Exercises/ExerciseAbout";

const ExerciseShowScreen = ({ route }) => {
  const [results] = useResult();
  const id = route.params.id;

  const exercise = results.find((result) => result.id === id);

  console.log(exercise);

  return (
    <View>
      <Text>ExerciseShowScreen</Text>
      {/* <ExerciseAbout name={exercise.name} /> */}
    </View>
  );
};

export default ExerciseShowScreen;

const styles = StyleSheet.create({});
