import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import useExerciseContext from "../../hooks/useExerciseContext";
import ExerciseList from "./ExerciseList";
import SearchBar from "../SearchBar";

const AddExercise = ({ setAddExercise, handleSubmit }) => {
  const { state } = useExerciseContext();
  const [search, setSearch] = useState();

  const updatedState = (term) =>
    state?.filter((exercise) => exercise.name.match(term));
  return (
    <View style={styles.container}>
      <SearchBar placeholder={"exercises"} setText={setSearch} />
      <ExerciseList
        state={updatedState(search)}
        setAddExercise={setAddExercise}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

export default AddExercise;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 18,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 60,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    // marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
