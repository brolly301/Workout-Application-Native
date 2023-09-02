import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RoutineList from "../components/Routines/RoutineList";
import useUserContext from "../hooks/useUserContext";

export default function RoutineScreen() {
  const [text, setText] = useState();
  const { getUserDetails, state } = useUserContext();

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routine</Text>
      <SearchBar setText={setText} placeholder={"routines"} />
      <Text style={styles.subTitle}>All Routines</Text>
      <RoutineList />
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
