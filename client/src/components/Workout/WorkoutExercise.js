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

const WorkoutExercise = ({ exerciseData, setExerciseData }) => {
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
    <View>
      <FlatList
        data={exerciseData.exercises}
        keyExtractor={(item) => item.exerciseID}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Spacer />
              <Spacer />
              <Text style={styles.title}>
                Exercise {index + 1} - {item.name}
              </Text>
              <Spacer />
              <View style={styles.setHeaderContainer}>
                <Text style={styles.header}>Set</Text>
                <Text style={styles.header}>Previous</Text>
                <Text style={styles.header}>kg</Text>
                <Text style={styles.header}>Reps</Text>
              </View>

              <FlatList
                data={item.sets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.setHeaderContainer}>
                      <Text style={styles.header}>{item.set}</Text>
                      <Text style={styles.header}>{item.previous}</Text>
                      <Text style={styles.header}>{item.kg}</Text>
                      <Text style={styles.header}>{item.reps}</Text>
                    </View>
                  );
                }}
              />

              <Spacer />
              <Input field={"Exercise Notes"} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddSet(index)}>
                <Text style={styles.buttonText}>Add Set</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default WorkoutExercise;

const styles = StyleSheet.create({
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
  setInput: {
    textAlign: "center",
    paddingBottom: 3,
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    marginTop: 10,
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
