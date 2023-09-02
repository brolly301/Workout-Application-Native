import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RoutineList from "../components/Routines/RoutineList";
import useUserContext from "../hooks/useUserContext";
import useRoutineContext from "../hooks/useRoutineContext";

export default function RoutineScreen() {
  const [text, setText] = useState();
  const [search, setSearch] = useState();
  const { getUserDetails, state } = useUserContext();
  const { allRoutines } = useRoutineContext();

  useEffect(() => {
    getUserDetails();
  }, []);

  const updatedState = allRoutines?.filter((routine) =>
    routine.name.match(search)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routine</Text>
      <SearchBar setText={setSearch} placeholder={"routines"} />
      <Text style={styles.subTitle}>All Routines</Text>
      <RoutineList allRoutines={updatedState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    fontSize: 36,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 18,
  },
});
