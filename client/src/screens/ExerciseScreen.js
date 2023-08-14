import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseList from "../components/Exercises/ExerciseList";
import useResult from "../hooks/useResult";

export default function ExerciseScreen() {
  const [results, error] = useResult();

  return (
    <View>
      <Text>ExerciseScreen</Text>
      <ExerciseList />
    </View>
  );
}

const styles = StyleSheet.create({});
