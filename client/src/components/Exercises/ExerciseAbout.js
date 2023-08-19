import { Image, StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function ExerciseAbout({ exercise }) {
  return (
    <View>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/dtcoefjmm/image/upload/v1692471110/exercises/images/3_4_Sit-Up/images/0_y0xzyp.jpg",
        }}
      />
      <Text style={styles.subTitle}>Instructions</Text>
      <FlatList
        data={exercise.instructions}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.instructions}>
              {index + 1}. {item}
            </Text>
          );
        }}
      />
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
    height: 200,
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 15,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
});
