import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import ExerciseDetails from "./ExerciseDetails";
import ExerciseAboutCarousel from "./ExerciseAboutCarousel";

export default function ExerciseAbout({ exercise, image }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={exercise.instructions}
      ListHeaderComponent={() => {
        return (
          <>
            <Text style={styles.title}>{exercise.name}</Text>
            <ExerciseAboutCarousel image={image} />
            <ExerciseDetails exercise={exercise} />
            {exercise?.instructions[0] ? (
              <Text style={styles.subTitle}>Instructions</Text>
            ) : null}
          </>
        );
      }}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.instructions}>
            {index + 1}. {item}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "500",
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
