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

export default function ExerciseList({ state }) {
  const navigation = useNavigation();

  const newState = state.filter((exercise) =>
    exercise.userID ? exercise : null
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>All Exercises</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(item) =>
          Math.floor(Math.random() * 1000000) + Date.now()
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ExerciseShow", { id: item.id })
              }>
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
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },

  title: {},
});
