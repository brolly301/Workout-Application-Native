import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ExerciseShow from "../../components/Exercises/ExerciseShow";
import { images } from "../Images";

const upperCaseChar = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ExerciseList({
  state,
  handleSubmit,
  setModalVisible,
  modalVisible,
  setState,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(item) =>
          Math.floor(Math.random() * 1000000) + Date.now()
        }
        renderItem={({ item }) => {
          const exerciseImage = images[item.id] || {};
          return (
            <TouchableOpacity
              onPress={() => {
                handleSubmit(item.name, item.category, item.level, setState);
                setModalVisible(!modalVisible);
              }}>
              <ExerciseShow exercise={item} image={exerciseImage} />
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
