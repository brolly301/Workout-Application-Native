import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useExerciseContext from "../../hooks/useExerciseContext";

const ExerciseSortBy = () => {
  const [active, setActive] = useState(false);
  const { state } = useExerciseContext();

  const handlePress = () => {
    setActive(!active);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.sortByText}>Sort By</Text>
      </TouchableOpacity>
      {active ? (
        <>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={() => state.reverse()}>
              <Text>A to Z</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Z to A</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default ExerciseSortBy;

const styles = StyleSheet.create({
  dropdownContainer: {
    position: "absolute",
    top: 35,
    borderColor: "black",
    borderWidth: 1,
  },
  sortByText: {
    marginRight: 10,
    alignSelf: "center",
    fontSize: 18,
  },
});
