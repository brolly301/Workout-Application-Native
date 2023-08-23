import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import ExerciseList from "../components/Exercises/ExerciseList";
import SearchBar from "../components/SearchBar";
import useExerciseContext from "../hooks/useExerciseContext";
import useExerciseSetsContext from "../hooks/useExerciseSetsContext";
import { useEffect } from "react";

export default function ExerciseScreen() {
  const { state, getExercises } = useExerciseContext();
  const [search, setSearch] = useState();

  useEffect(() => {
    getExercises();
  }, []);

  const updatedState = (term) =>
    state?.filter((exercise) => exercise.name.match(term));

  const sortA_Z = (state) => state?.sort();
  const sortZ_A = (state) => state?.reverse();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <SearchBar setText={setSearch} placeholder={"exercises"} />
      <Text style={styles.subTitle}>All Exercises</Text>
      <ExerciseList state={updatedState(search)} search={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 36,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 18,
  },
});
