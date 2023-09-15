import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
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
          buttonText={"New Workout"}
          message={"You currently don't have any history for this exercise."}
          secondMessage={
            "Please use the button below to begin a new workout and choose this exercise. Your history will then appear here."
          }
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
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
  container: {
    flex: 1,
  },
  listContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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
