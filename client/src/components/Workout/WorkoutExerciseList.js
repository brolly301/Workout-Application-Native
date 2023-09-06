import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useMemo } from "react";
import WorkoutExerciseShow from "./WorkoutExerciseShow";

const WorkoutExerciseList = ({
  workoutData,
  handleExerciseInputChange,
  addSetToExercise,
  handleExerciseNotesChange,
  removeExercise,
  removeSet,
  setExerciseModalVisible,
  exerciseModalVisible,
}) => {
  const renderFooter = () => {
    if (workoutData.exercises.length >= 3) {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setExerciseModalVisible(!exerciseModalVisible)}>
            <Text style={styles.buttonText}>Add Exercise</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workoutData.exercises}
        ListFooterComponentStyle={{ flex: 1, justifyContent: "flex-end" }}
        ListFooterComponent={renderFooter}
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
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    // marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
