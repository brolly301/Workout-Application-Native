import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function HistoryShow({ item }) {
  return (
    <View>
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
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {},
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    // marginHorizontal: 10,
    // marginRight: 40,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  setHeaderText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  exerciseName: {
    textAlign: "center",
    fontSize: 16,
  },
});
