import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { images } from "../Images";
import FastImage from "react-native-fast-image";

const upperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ExerciseShow({ exercise, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{upperCase(exercise.name)}</Text>

        <Text style={styles.type}>
          {exercise.primaryMuscles
            ? upperCase(exercise.primaryMuscles[0])
            : null}
          {exercise.primaryMuscle ? upperCase(exercise.primaryMuscle) : null}
        </Text>
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
    borderBottomWidth: 0,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 5,
  },
  textContainer: {
    padding: 15,
  },
  image: {
    marginLeft: 10,
    marginTop: 10,
    height: 65,
    width: 65,
    borderRadius: 10,
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
