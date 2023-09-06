import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RoutineList from "../components/Routines/RoutineList";
import useUserContext from "../hooks/useUserContext";
import useRoutineContext from "../hooks/useRoutineContext";
import HeaderPanel from "../components/HeaderPanel";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function RoutineScreen() {
  const [text, setText] = useState();
  const [search, setSearch] = useState();
  const { getUserDetails, state } = useUserContext();
  const { allRoutines } = useRoutineContext();

  const navigation = useNavigation();

  useEffect(() => {
    getUserDetails();
  }, []);

  const updatedState = allRoutines?.filter((routine) =>
    routine.name.match(search)
  );

  return (
    <HeaderPanel>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => navigation.navigate("CreateRoutine")}>
        <Feather name="plus" size={32} color="#D5A8F8" />
      </TouchableOpacity>
      <Text style={styles.title}>Routine</Text>
      <SearchBar setText={setSearch} placeholder={"routines"} />
      <Text style={styles.subTitle}>All Routines</Text>
      <RoutineList allRoutines={updatedState} />
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
  headerIcon: {
    alignSelf: "flex-end",
  },
});
