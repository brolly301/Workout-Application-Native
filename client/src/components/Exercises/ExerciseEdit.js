import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ExerciseEditShow from "./ExerciseEditShow";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import useExerciseContext from "../../hooks/useExerciseContext";

const ExerciseEdit = ({ state }) => {
  const navigation = useNavigation();

  const { deleteExercise } = useExerciseContext();

  const updatedState = state.filter((exercise) =>
    exercise.userID ? exercise : null
  );

  // console.log(updatedState);

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Edit Exercises</Text>
      <FlatList
        data={updatedState}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={styles.editContainer}>
              <TouchableOpacity
                onPress={() => deleteExercise(item._id, item.exerciseID)}>
                <Ionicons
                  name="remove-circle-outline"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ExerciseEdit", { id: item.exerciseID })
                }>
                <ExerciseEditShow exercise={item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ExerciseEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});
