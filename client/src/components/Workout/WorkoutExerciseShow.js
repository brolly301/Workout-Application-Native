import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import Spacer from "../Spacer";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

const WorkoutExerciseShow = ({
  item,
  exerciseIndex,
  handleExerciseInputChange,
  addSetToExercise,
  handleExerciseNotesChange,
  removeExercise,
  removeSet,
}) => {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <View style={styles.swipedRow}>
        <Animated.View style={[styles.deleteButton, { opacity }]}>
          <TouchableOpacity>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <View>
      <Spacer />
      <Spacer />
      <View style={styles.exerciseNameContainer}>
        <Text style={styles.title}>
          Exercise {exerciseIndex + 1} - {item.name}
        </Text>
        <TouchableOpacity onPress={() => removeExercise(exerciseIndex)}>
          <Ionicons name='remove-circle-outline' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <Spacer />
      <View style={styles.setHeaderContainer}>
        <Text style={styles.header}>Set</Text>

        <Text style={styles.header}>kg</Text>
        <Text style={styles.header}>Reps</Text>
      </View>
      {item.sets?.map((item, index) => {
        return (
          <Swipeable
            key={Math.floor(Math.random() * 1000000) + Date.now()}
            renderRightActions={renderRightActions}
          >
            <View style={styles.setHeaderContainer}>
              <Text style={styles.header}>{item.set}</Text>
              <TouchableOpacity onPress={() => removeSet(exerciseIndex, index)}>
                <Text>Kepp</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.header}
                placeholder='0'
                value={item?.kg?.toString() ?? ""}
                onChangeText={(text) =>
                  handleExerciseInputChange(exerciseIndex, index, "kg", text)
                }
              />
              <TextInput
                style={styles.header}
                placeholder='0'
                value={item?.reps?.toString() ?? ""}
                onChangeText={(text) =>
                  handleExerciseInputChange(exerciseIndex, index, "reps", text)
                }
              />
            </View>
          </Swipeable>
        );
      })}
      <Spacer />
      <TextInput
        value={item.notes}
        style={styles.input}
        onChangeText={(text) =>
          handleExerciseNotesChange(exerciseIndex, "notes", text)
        }
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addSetToExercise(exerciseIndex)}
      >
        <Text style={styles.buttonText}>Add Set</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutExerciseShow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  set: {
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 40,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: "auto",
    marginBottom: 15,
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  exerciseNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
