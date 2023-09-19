import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ExerciseShow from "../../components/Exercises/ExerciseShow";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../Spacer";
import { images } from "../Images";

export default function ExerciseList({ state }) {
  const navigation = useNavigation();

  const newState = state.filter((exercise) =>
    exercise.userID ? exercise : null
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>All Exercises</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={state.slice(0, 5)}
        keyExtractor={(item) =>
          Math.floor(Math.random() * 1000000) + Date.now()
        }
        renderItem={({ item, index }) => {
          // const imageIndex = index < images.length ? index : 0;
          const exerciseImage = images[item.id] || {};
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ExerciseShow", { id: item.id })
              }>
              <ExerciseShow exercise={item} image={exerciseImage} />
            </TouchableOpacity>
          );
        }}
      />
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },

  title: {},
});
