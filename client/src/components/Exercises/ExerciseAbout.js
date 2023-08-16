import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExerciseAbout({ name, image, instructions }) {
  return (
    <View>
      <Text>{name}</Text>
      {/* <Image source={image}/> */}
      <Text>Instructions</Text>
      {/* <Text>{instructions}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
