import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HistoryList({ limit }) {
  const { state } = useWorkoutContext();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={state.slice(0, limit)}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <FontAwesome5
                style={styles.icon}
                name="dumbbell"
                size={24}
                color="black"
              />
              <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                  <Text>{item.date}</Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>{item.time}</Text>
                  <Text>{item.exercises.length + 1 || 0} Exercises</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    marginBottom: 20,
    padding: 20,
  },
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
});
