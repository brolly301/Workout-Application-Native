import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({
  field,
  setText,
  error,
  multiline,
  numberOfLines,
  value,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{field}</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        value={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", alignItems: "center", paddingVertical: 5 },
  label: {
    alignSelf: "flex-start",
    fontSize: 18,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,

    width: "100%",
    paddingVertical: 7,
    paddingLeft: 7,
  },
  error: {
    color: "red",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
