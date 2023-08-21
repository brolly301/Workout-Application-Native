import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import useExerciseSetsContext from "../../hooks/useExerciseSetsContext";

export default function ExerciseHistory({ exercise }) {
  const { state } = useExerciseSetsContext();
  const [filteredData, setFilteredData] = useState(state);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filteredData = filter
      ? state?.map((ex) => ex.exerciseName === exercise.name)
      : state;
    setFilteredData(filteredData);
  }, [filter, state]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.exerciseName}</Text>
            </View>
          );
        }}
      />
      <Text style={styles.date}>Mon, 24 August 2023</Text>
      <View style={styles.hr} />
      <View style={styles.headerContainer}>
        <Text style={styles.setText}>Set</Text>
        <Text style={styles.setText}>kg</Text>
        <Text style={styles.setText}>Reps</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  date: {},
  setHeading: {},
  setText: {},
  headerContainer: {},
});
