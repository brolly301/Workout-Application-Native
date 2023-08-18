import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExerciseHistory() {
  return (
    <View>
      <Text></Text>
      <View style={styles.hr} />
    </View>
  );
}

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
