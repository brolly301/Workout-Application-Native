import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useResult from "../hooks/useResult";
import ExerciseAbout from "../components/Exercises/ExerciseAbout";
import ExerciseHistory from "../components/Exercises/ExerciseHistory";

const ExerciseShowScreen = ({ route }) => {
  const [selected, setSelected] = useState(true);

  const [results] = useResult();
  const id = route.params.id;

  const exercise = results.find((result) => result.id === id);

  const handleSelected = (boolean) => {
    setSelected(boolean);
  };

  let content = <ExerciseAbout />;
  if (!selected) {
    content = <ExerciseHistory />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSelected(true)}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSelected(false)}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
      {content}
    </View>
  );
};

export default ExerciseShowScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  button: {
    width: "48%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: "5%",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
