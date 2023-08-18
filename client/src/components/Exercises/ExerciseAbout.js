import { Image, StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function ExerciseAbout({ name, image, instructions }) {
  return (
    <View>
      <Text style={styles.title}>Chest Press</Text>
      <Image
        style={styles.image}
        source={require("../../images/exercise.jpg")}
      />
      <Text style={styles.subTitle}>Instructions</Text>
      <Text style={styles.instructions}>
        1. Lie down on a mat with your knees bent and a dumbbell in each hand.
      </Text>
      <Text style={styles.instructions}>
        2. Push the dumbbells up toward the ceiling so that your arms are
        directly over your shoulders and your palms are facing your feet.
      </Text>
      <Text style={styles.instructions}>
        3. Lower your arms and repeat the movement.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: "300",
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 15,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
  },
});
