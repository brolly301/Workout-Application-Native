import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const MultilineInput = ({ field, setText, error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{field}</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        multiline={true}
        style={styles.input}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default MultilineInput;

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
    height: 60,
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
