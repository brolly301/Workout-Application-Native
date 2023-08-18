import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExerciseAbout({ name, image, instructions }) {
  return (
    <View>
      <Text>Chest Press</Text>
      <Image
        style={styles.image}
        source={require("../../images/exercise.jpg")}
      />
      <Text>Instructions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {},
  image: {},
  subTitle: {},
  instructions: {},
});
