import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
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
              key={Math.floor(Math.random() * 100000)}
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
