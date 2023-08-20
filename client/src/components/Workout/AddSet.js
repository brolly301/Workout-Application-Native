import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import React from "react";

const AddSet = ({ set }) => {
  console.log(set);
  return (
    <View>
      <FlatList
        data={set}
        keyExtractor={(item) => item.set}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text>{item.set}</Text>
              <Text>{item.previous}</Text>
              <TextInput style={styles.setInput} />
              <TextInput style={styles.setInput} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default AddSet;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  setInput: {
    textAlign: "center",
    paddingBottom: 3,
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
  },
});
