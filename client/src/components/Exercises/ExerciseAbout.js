import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ExerciseDetails from "./ExerciseDetails";

export default function ExerciseAbout({ exercise }) {
  return (
    <View>
      <>
        <Text style={styles.title}>{exercise.name}</Text>
        <ExerciseDetails exercise={exercise} />
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
