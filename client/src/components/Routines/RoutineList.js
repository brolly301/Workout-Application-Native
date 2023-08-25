import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import useRoutineContext from "../../hooks/useRoutineContext";
import RoutineShow from "./RoutineShow";

export default function RoutineList({ limit }) {
  const { allRoutines } = useRoutineContext();

  console.log(allRoutines);

  return (
    <View>
      <FlatList
        data={allRoutines.slice(0, limit)}
        key={(item) => item._id}
        renderItem={({ item }) => {
          return <RoutineShow routine={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
