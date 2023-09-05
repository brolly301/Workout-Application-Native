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

export default function ExerciseList({
  state,
  handleSubmit,
  setModalVisible,
  modalVisible,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) =>
          Math.floor(Math.random() * 1000000) + Date.now()
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleSubmit(item.name, item.category, item.level);
                setModalVisible(!modalVisible);
              }}
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
    height: "100%",
  },
  title: {},
});
