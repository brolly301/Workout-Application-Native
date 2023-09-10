import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ExerciseHistoryShow = ({ item }) => {
  const date = new Date(item.date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <View style={styles.listContainer}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.hr} />

      <View style={styles.setContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.setHeading}>Set</Text>
          {item.sets.map((set) => (
            <Text key={set._id + set.set} style={styles.setText}>
              {set.set}
            </Text>
          ))}
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.setHeading}>Kg</Text>
          {item.sets.map((set) => (
            <Text key={set._id + set.set} style={styles.setText}>
              {set.kg}
            </Text>
          ))}
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.setHeading}>Reps</Text>
          {item.sets.map((set) => (
            <Text key={set._id + set.reps} style={styles.setText}>
              {set.reps}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ExerciseHistoryShow;

const styles = StyleSheet.create({
  listContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  date: {
    textAlign: "center",
  },
  setHeading: {
    fontWeight: "bold",
  },
  setText: {
    marginVertical: 5,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
  },
  setContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
