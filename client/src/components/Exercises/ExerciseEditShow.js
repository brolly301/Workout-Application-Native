import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import DeleteModal from "../DeleteModal";
import useExerciseContext from "../../hooks/useExerciseContext";

const upperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ExerciseShow({ exercise }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteExercise } = useExerciseContext();

  return (
    <>
      <DeleteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        routine={exercise}
        deleteFunction={deleteExercise}
        id={exercise.exerciseID}
        deleteText={"Exercise"}
      />
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Ionicons
            name="remove-circle-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/dtcoefjmm/image/upload/v1692471110/exercises/images/3_4_Sit-Up/images/0_y0xzyp.jpg",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{upperCase(exercise.name)}</Text>
            <Text style={styles.type}>
              {exercise.primaryMuscles
                ? upperCase(exercise.primaryMuscles[0])
                : null}
            </Text>
          </View>
          <EvilIcons
            style={styles.icon}
            name="pencil"
            size={34}
            color="#D5A8F8"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    width: "91%",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 5,
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
