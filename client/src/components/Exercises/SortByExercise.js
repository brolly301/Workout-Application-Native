import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SortByExercise = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>A to Z</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SortByExercise;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
  },
});
