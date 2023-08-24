import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Input from "../Input";
import Spacer from "../Spacer";
import AddSet from "./AddSet";
import WorkoutExerciseShow from "./WorkoutExerciseShow";

const WorkoutExerciseList = ({ exerciseData, setExerciseData }) => {
  const handleAddSet = (index) => {
    // Create a shallow copy of exerciseData
    const newExerciseData = { ...exerciseData };

    // Create a shallow copy of the exercises array
    const newExercises = [...newExerciseData.exercises];

    // Create a shallow copy of the sets array within an exercise
    const newSets = [...newExercises[index].sets];

    // Add a new set to the sets array
    newSets.push({ set: 1, previous: "60x10", kg: 20, reps: 10 }); // Change this according to your set structure

    // Update the sets array within the first exercise
    newExercises[index].sets = newSets;

    // Update the exercises array within exerciseData
    newExerciseData.exercises = newExercises;

    // Update the state with the new exerciseData
    setExerciseData(newExerciseData);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={exerciseData.exercises}
        keyExtractor={(item) => item.exerciseID}
        renderItem={({ item, index }) => {
          return (
            <WorkoutExerciseShow
              item={item}
              index={index}
              handleAddSet={handleAddSet}
            />
          );
        }}
      />
    </View>
  );
};

export default WorkoutExerciseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
