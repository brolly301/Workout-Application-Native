import { Image, StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function ExerciseAbout({ exercise }) {
  const toUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View>
      <>
        <Text style={styles.title}>{exercise.name}</Text>
        <View style={styles.exercisePropertiesContainer}>
          <View style={styles.exerciseProperties}>
            <Text style={styles.textContainer}>
              <Text style={styles.exercisePropertiesHeaderText}>Level: </Text>
              <Text style={styles.exercisePropertiesText}>
                {exercise?.level ? toUpperCase(exercise.level) : "N/A"}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.exercisePropertiesHeaderText}>Force: </Text>
              <Text style={styles.exercisePropertiesText}>
                {exercise?.force ? toUpperCase(exercise.force) : "N/A"}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.exercisePropertiesHeaderText}>
                Mechanic:{" "}
              </Text>
              <Text style={styles.exercisePropertiesText}>
                {exercise?.mechanic ? toUpperCase(exercise.mechanic) : "N/A"}
              </Text>
            </Text>
          </View>
          <View style={styles.exerciseProperties}>
            <Text style={styles.textContainer}>
              <Text style={styles.exercisePropertiesHeaderText}>
                Primary Muscle:{" "}
              </Text>
              <Text style={styles.exercisePropertiesText}>
                {exercise?.primaryMuscles[0]
                  ? toUpperCase(exercise.primaryMuscles[0])
                  : "N/A"}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.exercisePropertiesHeaderText}>
                Secondary Muscle:{" "}
              </Text>
              <Text style={styles.exercisePropertiesText}>
                {exercise?.secondaryMuscles[0]
                  ? toUpperCase(exercise.secondaryMuscles[0])
                  : "N/A"}
              </Text>
            </Text>
            <Text style={styles.textContainer}>
              <Text style={styles.exercisePropertiesHeaderText}>
                Category:{" "}
              </Text>
              <Text style={styles.exercisePropertiesText}>
                {exercise?.category ? toUpperCase(exercise.category) : "N/A"}
              </Text>
            </Text>
          </View>
        </View>

        {exercise?.instructions[0] ? (
          <Text style={styles.subTitle}>Instructions</Text>
        ) : null}

        <FlatList
          data={exercise.instructions}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            return (
              <Text style={styles.instructions}>
                {index + 1}. {item}
              </Text>
            );
          }}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
  },
  instructions: {
    fontSize: 15,
    marginBottom: 13,
  },
  exercisePropertiesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  exerciseProperties: {
    display: "flex",
    flexDirection: "column",
  },
  exercisePropertiesHeaderText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  exercisePropertiesText: {
    fontSize: 15,
  },
  textContainer: {
    marginBottom: 10,
  },
});
