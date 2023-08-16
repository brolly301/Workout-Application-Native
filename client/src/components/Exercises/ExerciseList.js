import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import useResult from "../../hooks/useResult";
import ExerciseShow from "../../components/Exercises/ExerciseShow";
import { useNavigation } from "@react-navigation/native";

const upperCaseChar = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ExerciseList() {
  const [results] = useResult();

  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={results.slice(0, 3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ExerciseShow", { id: item.id })
              }>
              <ExerciseShow
                name={upperCaseChar(item.name)}
                type={upperCaseChar(item.target)}
                image={item.gifUrl}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {},
});
