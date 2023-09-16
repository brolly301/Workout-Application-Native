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
  const handleChangeText = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        placeholder={field}
        defaultValue={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        onChangeText={handleChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", alignItems: "center", paddingVertical: 5 },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    fontSize: 16,
    width: "100%",
    paddingVertical: 13,
    paddingLeft: 7,
    marginBottom: 4,
  },
  error: {
    color: "red",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
