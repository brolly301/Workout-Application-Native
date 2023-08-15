import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function AuthInput({ field, setText }) {
  return (
    <View>
      <Text>{field}</Text>
      <TextInput onChangeText={(text) => setText(text)} />
    </View>
  );
}

const styles = StyleSheet.create({});
