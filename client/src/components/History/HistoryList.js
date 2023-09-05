import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import { FontAwesome5 } from "@expo/vector-icons";
import HistoryModal from "./HistoryModal";
import NoResultsPlaceholder from "../NoResultsPlaceholder";

export default function HistoryList({ limit, state, handleDeleteWorkout }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {state?.length < 1 ? (
        <NoResultsPlaceholder
          redirect={"Workout"}
          buttonText={"New Workout"}
          message={"You have currently not created any workouts."}
          secondMessage={
            "Please use the button below to begin a new workout. Your history will then appear here."
          }
        />
      ) : (
        <>
          <FlatList
            data={Array.isArray(state) ? state.slice(0, limit) : []}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
              const date = new Date(item.date).toLocaleDateString("en-gb", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "short",
              });

              return (
                <>
                  <HistoryModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    routine={item}
                    handleDeleteWorkout={handleDeleteWorkout}
                  />
                  <View style={styles.container}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <FontAwesome5
                        style={styles.icon}
                        name='dumbbell'
                        size={24}
                        color='black'
                      />
                      <View style={styles.subContainer}>
                        <View style={styles.textContainer}>
                          <Text style={styles.text}>{item.name}</Text>

                          <Text style={styles.text}>{date}</Text>
                        </View>
                        <View style={styles.textContainer}>
                          <Text style={styles.text}>{item.time}hr 50min</Text>
                          <Text style={styles.text}>
                            {item.exercises.length || 0} Exercises
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </>
              );
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
    borderRadius: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    paddingVertical: 20,

    borderRadius: 5,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
  },
  icon: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  setHeaderText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  exerciseName: {
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    marginVertical: 3,
  },
});
