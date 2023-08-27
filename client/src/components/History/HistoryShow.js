import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function HistoryShow({ item }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.hr} />
      {item?.exercises.map((exercise) => {
        return (
          <View>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <View style={styles.headerContainer}>
              <Text style={styles.setHeaderText}>Set</Text>
              <Text style={styles.setHeaderText}>kg</Text>
              <Text style={styles.setHeaderText}>Reps</Text>
            </View>
            {exercise?.sets.map((set) => {
              return (
                <View style={styles.headerContainer}>
                  <Text style={styles.setText}>{set.set}</Text>
                  <Text style={styles.setText}>{set.kg}</Text>
                  <Text style={styles.setText}>{set.reps}</Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 10,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  setHeaderText: {
    textAlign: "center",
    fontWeight: "600",
  },
  exerciseName: {
    textAlign: "center",
    fontSize: 17,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
