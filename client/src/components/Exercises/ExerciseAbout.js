import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import ExerciseDetails from "./ExerciseDetails";

export default function ExerciseAbout({ exercise, image }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <>
          <Text style={styles.title}>{exercise.name}</Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image.image} />
            <Image style={styles.image} source={image.image2} />
          </View>

          <ExerciseDetails exercise={exercise} />
          {exercise?.instructions[0] ? (
            <Text style={styles.subTitle}>Instructions</Text>
          ) : null}
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
        </>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 2,
    // marginVertical: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  image: {
    width: 185,
    height: 200,
    marginVertical: 15,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
  },
  instructions: {
    fontSize: 15,
    marginBottom: 13,
  },
  exercisePropertiesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  exerciseProperties: {
    display: "flex",
    flexDirection: "column",
  },
  exercisePropertiesHeaderText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  exercisePropertiesText: {
    fontSize: 15,
  },
  textContainer: {
    marginBottom: 10,
  },
});
