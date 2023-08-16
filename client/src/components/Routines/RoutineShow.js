import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function RoutineShow({ name, amountUsed }) {
  return (
    <View>
      //Icon
      <Text>{name}</Text>
      <Text>{amountUsed}</Text>
      <AntDesign name='arrowright' size={24} color='black' />
    </View>
  );
}

const styles = StyleSheet.create({});
