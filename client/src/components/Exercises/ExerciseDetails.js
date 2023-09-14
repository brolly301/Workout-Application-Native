import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExerciseDetails = ({ exercise }) => {
  const toUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
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
          <Text style={styles.exercisePropertiesHeaderText}>Mechanic: </Text>
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
          <Text style={styles.exercisePropertiesHeaderText}>Category: </Text>
          <Text style={styles.exercisePropertiesText}>
            {exercise?.category ? toUpperCase(exercise.category) : "N/A"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({
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
