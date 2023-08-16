import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HistoryScreen() {
  return (
    <View>
      <Text>History</Text>
      <Button title='Workouts' />
      <Button title='Runs' />
    </View>
  );
}

const styles = StyleSheet.create({});
