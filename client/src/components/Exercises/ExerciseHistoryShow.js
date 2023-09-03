import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ExerciseHistoryShow = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.date}>Mon, 24 August 2023</Text>
      <View style={styles.hr} />
      <View style={styles.headerContainer}>
        <Text style={styles.setText}>Set</Text>
        <Text style={styles.setText}>kg</Text>
        <Text style={styles.setText}>Reps</Text>
      </View>
      <FlatList
        data={item.sets}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={styles.headerContainer}>
              <Text style={styles.setText}>{item.set}</Text>
              <Text style={styles.setText}>{item.kg}</Text>
              <Text style={styles.setText}>{item.reps}</Text>
            </View>
          );
        }}
      />
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
