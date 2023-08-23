import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useExerciseContext from "../../hooks/useExerciseContext";
import useStateContext from "../../hooks/useStateContext";

const ExerciseSortBy = () => {
  const [active, setActive] = useState(false);
  const { selected, setSelected } = useStateContext();

  const handlePress = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (selected) {
      console.log(selected);
    }
  }, [selected]);

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.sortByText}>Sort By</Text>
      </TouchableOpacity>
      {active ? (
        <>
          <View style={styles.dropdownContainer}>
            {selected === "reverse" ? (
              <>
                <TouchableOpacity onPress={() => setSelected("search")}>
                  <Text>Z to A</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity onPress={() => setSelected("reverse")}>
                  <Text>A to Z</Text>
                </TouchableOpacity>
              </>
            )}
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
  dropdownText: {
    fontSize: 20,
    marginVertical: 20,
  },
});
