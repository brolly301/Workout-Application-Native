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

const WorkoutExerciseList = ({
  workoutData,
  handleExerciseInputChange,
  addSetToExercise,
  handleExerciseNotesChange,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={workoutData.exercises}
        keyExtractor={(item) => item.exerciseID}
        renderItem={({ item, index }) => {
          return (
            <WorkoutExerciseShow
              item={item}
              exerciseIndex={index}
              handleExerciseInputChange={handleExerciseInputChange}
              addSetToExercise={addSetToExercise}
              handleExerciseNotesChange={handleExerciseNotesChange}
              key={item.exerciseID}
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
