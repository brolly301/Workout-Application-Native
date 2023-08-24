import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ExerciseShow from "../../components/Exercises/ExerciseShow";
import { useNavigation } from "@react-navigation/native";

const upperCaseChar = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ExerciseList({ state }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ExerciseShow", { id: item.id })
              }
            >
              <ExerciseShow exercise={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {},
});
