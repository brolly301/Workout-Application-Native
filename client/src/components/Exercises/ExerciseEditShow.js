import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function ExerciseShow({ exercise }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/dtcoefjmm/image/upload/v1692471110/exercises/images/3_4_Sit-Up/images/0_y0xzyp.jpg",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.type}>
          {exercise.primaryMuscles ? exercise.primaryMuscles[0] : null}
        </Text>
      </View>
      <EvilIcons style={styles.icon} name='pencil' size={30} color='black' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "94.5%",
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
