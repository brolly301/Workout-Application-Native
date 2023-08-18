import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ExerciseShow({ name, type, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../images/exercise.jpg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <AntDesign
        style={styles.icon}
        name="arrowright"
        size={24}
        color="black"
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
  },
  textContainer: {
    padding: 15,
  },
  image: {
    height: 100,
    width: 100,
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
