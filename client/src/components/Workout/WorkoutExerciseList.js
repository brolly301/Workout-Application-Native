import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import WorkoutExerciseShow from "./WorkoutExerciseShow";

const WorkoutExerciseList = ({
  workoutData,
  handleExerciseInputChange,
  addSetToExercise,
  handleExerciseNotesChange,
  removeExercise,
  removeSet,
  setAddExercise,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={workoutData.exercises}
        keyExtractor={(item) =>
          Math.floor(Math.random() * 1000000) + Date.now()
        }
        renderItem={({ item, index }) => {
          return (
            <WorkoutExerciseShow
              item={item}
              exerciseIndex={index}
              handleExerciseInputChange={handleExerciseInputChange}
              addSetToExercise={addSetToExercise}
              handleExerciseNotesChange={handleExerciseNotesChange}
              removeExercise={removeExercise}
              removeSet={removeSet}
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
