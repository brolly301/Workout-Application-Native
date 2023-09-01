import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import useRoutineContext from "../../hooks/useRoutineContext";
import { useNavigation } from "@react-navigation/native";

const RoutineStart = ({ routine }) => {
  const { deleteRoutine } = useRoutineContext();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteRoutine(routine._id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() =>
            navigation.navigate("RoutineWorkout", {
              screen: "CreateWorkout",
              params: { routine: routine },
            })
          }>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.exerciseContainer}>
        {routine?.exercises?.map((exercise) => {
          return (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.exerciseText}>
                {exercise.sets.length}X Set -
              </Text>
              <Text style={styles.exerciseText}> {exercise.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RoutineStart;

const styles = StyleSheet.create({
  exerciseContainer: {
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    borderRadius: "5%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  exerciseText: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteButton: {
    width: "32%",
    backgroundColor: "lightcoral",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  editButton: {
    width: "30%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  startButton: {
    width: "30%",
    backgroundColor: "lightgreen",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 8,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
