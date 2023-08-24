import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Spacer from "../Spacer";
import Input from "../Input";

const WorkoutExerciseShow = ({ item, index, handleAddSet }) => {
  return (
    <View>
      <Spacer />
      <Spacer />
      <Text style={styles.title}>
        Exercise {index + 1} - {item.name}
      </Text>
      <Spacer />
      <View style={styles.setHeaderContainer}>
        <Text style={styles.header}>Set</Text>
        <Text style={styles.header}>Previous</Text>
        <Text style={styles.header}>kg</Text>
        <Text style={styles.header}>Reps</Text>
      </View>

      <FlatList
        data={item.sets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.setHeaderContainer}>
              <Text style={styles.header}>{item.set}</Text>
              <Text style={styles.header}>{item.previous}</Text>
              <Text style={styles.header}>{item.kg}</Text>
              <Text style={styles.header}>{item.reps}</Text>
            </View>
          );
        }}
      />
      <Spacer />
      <Input field={"Exercise Notes"} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddSet(index)}
      >
        <Text style={styles.buttonText}>Add Set</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutExerciseShow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  set: {
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 3,
  },
  setInput: {
    textAlign: "center",
    paddingBottom: 3,
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    marginTop: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
