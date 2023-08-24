import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Spacer from "../Spacer";
import Input from "../Input";

const WorkoutExerciseShow = ({
  item,
  exerciseIndex,
  handleExerciseInputChange,
  addSetToExercise,
  handleExerciseNotesChange,
}) => {
  return (
    <View>
      <Spacer />
      <Spacer />
      <Text style={styles.title}>
        Exercise {exerciseIndex + 1} - {item.name}
      </Text>
      <Spacer />
      <View style={styles.setHeaderContainer}>
        <Text style={styles.header}>Set</Text>
        <Text style={styles.header}>Previous</Text>
        <Text style={styles.header}>kg</Text>
        <Text style={styles.header}>Reps</Text>
      </View>
      {item.sets?.map((item, index) => {
        return (
          <View style={styles.setHeaderContainer}>
            <Text style={styles.header}>{item.set}</Text>
            <Text style={styles.header}>{item.previous}</Text>
            <TextInput
              placeholder='0'
              onChangeText={(text) =>
                handleExerciseInputChange(exerciseIndex, index, "kg", text)
              }
            />
            <TextInput
              placeholder='0'
              onChangeText={(text) =>
                handleExerciseInputChange(exerciseIndex, index, "reps", text)
              }
            />
          </View>
        );
      })}
      <Spacer />
      <TextInput
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

{
  /* <FlatList
        data={item.sets}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.setHeaderContainer}>
              <Text style={styles.header}>{item.set}</Text>
              <Text style={styles.header}>{item.previous}</Text>
              <TextInput
                placeholder='0'
                onChangeText={(text) =>
                  handleExerciseInputChange(exerciseIndex, index, "kg", text)
                }
              />
              <TextInput
                placeholder='0'
                onChangeText={(text) =>
                  handleExerciseInputChange(exerciseIndex, index, "reps", text)
                }
              />
            </View>
          );
        }}
      /> */
}

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
    borderRadius: "5%",
    paddingVertical: 8,
    marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
