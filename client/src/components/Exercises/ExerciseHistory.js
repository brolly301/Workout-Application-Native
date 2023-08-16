import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExerciseHistory() {
  return (
    <View>
      <Text>{date}</Text>
      <View style={styles.hr} />
      //Library for table
    </View>
  );
}

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
