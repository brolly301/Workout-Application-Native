import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ExerciseList from "../components/Exercises/ExerciseList";
import SearchBar from "../components/SearchBar";
import useExerciseContext from "../hooks/useExerciseContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ExerciseSortBy from "../components/Exercises/ExerciseSortBy";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import ExerciseEdit from "../components/Exercises/ExerciseEdit";

export default function ExerciseScreen() {
  const navigation = useNavigation();
  const { state, getExercises } = useExerciseContext();
  const [search, setSearch] = useState();
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("search");

  const handleEdit = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    getExercises();
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => handleEdit()}>
            <Text>Edit</Text>
          </TouchableOpacity>
          {/* <ExerciseSortBy selected={selected} setSelected={setSelected} /> */}
          <GestureHandlerRootView>
            <TouchableOpacity
              onPress={() => navigation.navigate("ExerciseCreate")}>
              <Feather name="plus" size={24} color="#D5A8F8" />
            </TouchableOpacity>
          </GestureHandlerRootView>
        </View>
      ),
    });
  }, [isActive]);

  const update = (sortBy) => {
    switch (sortBy) {
      case "search":
        return state?.filter((exercise) => exercise.name.match(search));
      case "reverse":
        return state?.slice().reverse();
      default:
        return state;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <SearchBar setText={setSearch} placeholder={"exercises"} />
      {isActive ? (
        <ExerciseEdit state={update(selected)} />
      ) : (
        <ExerciseList state={update(selected)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 36,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 18,
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
  },
});
