import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function ExerciseList() {
  return (
    <View>
      <Text>ExerciseList</Text>
      <Button title="Hey" onPress={() => console.log(results)} />
    </View>
  );
}

const styles = StyleSheet.create({});
