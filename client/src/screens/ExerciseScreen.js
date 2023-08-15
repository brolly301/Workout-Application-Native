import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ExerciseList from "../components/Exercises/ExerciseList";
import SearchBar from "../components/SearchBar";

export default function ExerciseScreen() {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <SearchBar setText={setText} placeholder={"exercises"} />
      <Text style={styles.subTitle}>All Exercises</Text>
      <ExerciseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 36,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 18,
  },
});
