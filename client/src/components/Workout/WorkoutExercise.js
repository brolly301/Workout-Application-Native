import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Input from "../Input";
import Spacer from "../Spacer";

const WorkoutExercise = ({ exerciseData }) => {
  console.log(exerciseData);
  return (
    <View>
      <FlatList
        data={exerciseData}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Spacer />
              <Spacer />
              <Text style={styles.title}>
                Exercise {index + 1} - {item.name}
              </Text>
              <Spacer />
              <View style={styles.setHeaderContainer}>
                <View>
                  <Text style={styles.header}>Set</Text>
                  <Text style={styles.set}>1</Text>
                </View>
                <View>
                  <Text style={styles.header}>Previous</Text>
                  <Text style={styles.set}>60 x 10</Text>
                </View>
                <View>
                  <Text style={styles.header}>kg</Text>
                  <Text style={styles.set}>60</Text>
                </View>
                <View>
                  <Text style={styles.header}>Reps</Text>
                  <Text style={styles.set}>10</Text>
                </View>
              </View>
              <Spacer />
              <Input field={"Exercise Notes"} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add Set</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default WorkoutExercise;

const styles = StyleSheet.create({
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
