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
import HeaderPanel from "../components/HeaderPanel";

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
              style={styles.headerIcon}
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
    <HeaderPanel>
      <View style={styles.headerRight}>
        {/* <ExerciseSortBy selected={selected} setSelected={setSelected} /> */}

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
        <ExerciseEdit state={update(selected)} />
      ) : (
        <ExerciseList state={update(selected)} />
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
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  editText: {
    fontSize: 20,
    marginRight: 15,
  },
});
