import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Spacer from "../Spacer";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import {
  removeExercise,
  removeSet,
  handleExerciseInputChange,
  addSetToExercise,
  handleExerciseNotesChange,
} from "../WorkoutFunctions";
import { TextInput } from "react-native-gesture-handler";

const WorkoutExerciseShow = ({ item, exerciseIndex, state, setState }) => {
  const setLength = item.sets.length;

  let defaultTemp = { editingIndex: -1, text: "" };
  let [temp, setTemp] = useState(defaultTemp);
  let defaultTemp2 = { editingIndex: -1, text: "" };
  let [temp2, setTemp2] = useState(defaultTemp2);
  let defaultTemp3 = { editingIndex: -1, text: "" };
  let [temp3, setTemp3] = useState(defaultTemp3);

  return (
    <View>
      <Spacer />
      <Spacer />
      <View style={styles.exerciseNameContainer}>
        <Text style={styles.title}>
          Exercise {exerciseIndex + 1} - {item.name}
        </Text>
        <TouchableOpacity
          onPress={() => removeExercise(exerciseIndex, setState)}>
          <Ionicons name="remove-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Spacer />
      <View style={styles.setHeaderContainer}>
        <Text style={styles.header}>Set</Text>

        <Text style={styles.header}>kg</Text>
        <Text style={styles.header}>Reps</Text>
      </View>
      {item.sets?.map((item, index) => {
        return (
          <Swipeable
            key={index}
            renderRightActions={() => (
              <View>
                {setLength > 1 ? (
                  <TouchableOpacity
                    style={styles.swipeableButton}
                    onPress={() => removeSet(exerciseIndex, index, setState)}>
                    <EvilIcons name="trash" size={30} color="red" />
                  </TouchableOpacity>
                ) : null}
              </View>
            )}>
            <View style={styles.setHeaderContainer}>
              <Text style={styles.set}>{item.set}</Text>

              <TextInput
                placeholder="0"
                style={styles.kg}
                keyboardType="number-pad"
                value={
                  temp.editingIndex === index ? temp.text : item?.kg?.toString()
                }
                onFocus={() => setTemp({ editingIndex: index, text: item.kg })}
                onBlur={() => {
                  handleExerciseInputChange(
                    exerciseIndex,
                    index,
                    "kg",
                    temp.text,
                    setState
                  );
                  setTemp(defaultTemp);
                }}
                onChangeText={(text) => setTemp({ text, editingIndex: index })}
              />
              <TextInput
                placeholder="0"
                style={styles.kg}
                keyboardType="number-pad"
                value={
                  temp2.editingIndex === index
                    ? temp2.text
                    : item?.reps?.toString()
                }
                onFocus={() =>
                  setTemp2({ editingIndex: index, text: item.reps })
                }
                onBlur={() => {
                  handleExerciseInputChange(
                    exerciseIndex,
                    index,
                    "reps",
                    temp2.text,
                    setState
                  );
                  setTemp2(defaultTemp2);
                }}
                onChangeText={(text) => setTemp2({ text, editingIndex: index })}
              />
            </View>
          </Swipeable>
        );
      })}
      <Spacer />
      <TextInput
        placeholder="Exercise notes"
        style={styles.input}
        value={temp3.editingIndex === exerciseIndex ? temp3.text : item.notes}
        onFocus={() =>
          setTemp3({ editingIndex: exerciseIndex, text: item.reps })
        }
        onBlur={() => {
          handleExerciseNotesChange(
            exerciseIndex,
            "notes",
            temp3.text,
            setState
          );
          setTemp3(defaultTemp3);
        }}
        onChangeText={(text) => setTemp3({ text, editingIndex: exerciseIndex })}
      />
      {/* <TextInput
        value={item.notes}
        style={styles.input}
        placeholder="Exercise notes"
        onChangeText={(text) =>
          handleExerciseNotesChange(exerciseIndex, "notes", text, setState)
        }
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => addSetToExercise(exerciseIndex, state, setState)}>
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
    fontWeight: "bold",
  },
  title: {
    fontSize: 18.5,
    fontWeight: "bold",
  },
  set: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 3,
    marginHorizontal: 5,
    fontWeight: "500",
  },
  kg: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 3,
    paddingLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 40,
    paddingVertical: 7,
    paddingLeft: 7,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: "auto",
    marginBottom: 15,
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  exerciseNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  swipeableButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    // flex: 1,
  },
  swipeableButtonText: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
    fontWeight: "bold",
  },
});
