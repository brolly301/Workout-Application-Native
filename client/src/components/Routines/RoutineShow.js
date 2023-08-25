import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function RoutineShow({ routine }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="dumbbell" size={24} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{routine?.name}</Text>
        <Text style={styles.type}>{routine?.description}</Text>
      </View>
      <AntDesign
        name="arrowright"
        size={24}
        color="black"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: "5%",
  },
  textContainer: {
    padding: 15,
  },

  icon: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  type: {
    fontSize: 16,
  },
});
