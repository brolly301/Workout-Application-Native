import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";

export default function RoutineCreate() {
  return (
    <View>
      <Text>Routines</Text>
      <Text>Routine Name</Text>
      <Input />
      <Button title='Add Exercise' />
    </View>
  );
}

const styles = StyleSheet.create({});
