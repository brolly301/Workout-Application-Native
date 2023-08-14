import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function RoutineScreen() {
  return (
    <View>
      <Text>RoutineScreen</Text>
      <FontAwesome5 name="clipboard-list" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({});
