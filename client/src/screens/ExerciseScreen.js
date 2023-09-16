import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useExerciseContext from "../hooks/useExerciseContext";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import ExerciseEdit from "../components/Exercises/ExerciseEdit";
import HeaderPanel from "../components/HeaderPanel";
import ExerciseSortByFilter from "../components/Exercises/ExerciseSortByFilter";
import exerciseSortFunction from "../components/ExerciseSortFunction";

export default function ExerciseScreen() {
  const navigation = useNavigation();
  const { state, getExercises } = useExerciseContext();
  const [search, setSearch] = useState();
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("search");

  const handleEdit = () => {
    setIsActive(!isActive);
  };

  const updateSortBy = (sortBy) => {
    switch (sortBy) {
      case "search":
        return state?.filter((exercise) => exercise.name.match(search));
      case "reverse":
        return state?.slice().reverse();
      case "hamstrings":
        return state?.filter((exercise) =>
          exercise.primaryMuscles.includes("adductors")
        );
      default:
        return state;
    }
  };

  return (
    <HeaderPanel>
      <View style={styles.headerContainer}>
        {/* Pushes any other data to the right */}
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => handleEdit()}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <GestureHandlerRootView>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExerciseCreate")}>
            <Feather name="plus" size={32} color="#D5A8F8" />
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
      <Text style={styles.title}>Exercises</Text>
      <SearchBar setText={setSearch} placeholder={"exercises"} />
      {isActive ? (
        <ExerciseEdit state={updateSortBy(selected)} />
      ) : (
        <ExerciseSortByFilter
          sortByState={exerciseSortFunction(search, state, selected)}
          setSelected={setSelected}
        />
      )}
    </HeaderPanel>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontSize: 20,
    marginRight: 15,
  },
});
