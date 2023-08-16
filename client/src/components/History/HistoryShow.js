import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HistoryShow({ date, name, time, exerciseAmount }) {
  return (
    <View>
      //Icon
      <Text>{date}</Text>
      <Text>{name}</Text>
      <Text>{time}</Text>
      <Text>{exerciseAmount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
