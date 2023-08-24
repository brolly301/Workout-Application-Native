import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import useExerciseSetsContext from "../../hooks/useExerciseSetsContext";
import ExerciseHistoryShow from "./ExerciseHistoryShow";
import NoResultsPlaceholder from "../NoResultsPlaceholder";

export default function ExerciseHistory({ exercise }) {
  const { state } = useExerciseSetsContext();

  const exercises = state.filter((ex) => ex.exerciseName === exercise.name);

  return (
    <View style={styles.container}>
      {exercises.length < 1 ? (
        <NoResultsPlaceholder
          redirect={"Workout"}
          buttonText={"Start New Workout"}
          message={"You currently don't have any history for this exercise."}
        />
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <ExerciseHistoryShow item={item} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: "5%",
    marginBottom: 10,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  date: {
    textAlign: "center",
  },
  setHeading: {},
  setText: {},
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
