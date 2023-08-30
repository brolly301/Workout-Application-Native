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
import HistoryShow from "./HistoryShow";

export default function HistoryList({ limit, state, handleDeleteWorkout }) {
  // const { state } = useWorkoutContext();
  const [isActive, setIsActive] = useState(null);

  //Setting the expanded item based on the index of the workout
  const handleItemPress = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          const date = new Date(item.date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "short",
          });
          const isExpanded = index === isActive;
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => handleItemPress(index)}>
                <FontAwesome5
                  style={styles.icon}
                  name="dumbbell"
                  size={24}
                  color="black"
                />
                <View style={styles.subContainer}>
                  <View style={styles.textContainer}>
                    <Text>{date}</Text>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text>{item.time}</Text>
                    <Text>{item.exercises.length || 0} Exercises</Text>
                  </View>
                </View>
                {isExpanded && (
                  <>
                    <HistoryShow
                      item={item}
                      handleDeleteWorkout={handleDeleteWorkout}
                    />
                  </>
                )}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
    borderRadius: "5%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    paddingTop: 20,
    borderRadius: "5%",
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
  },
  icon: {
    position: "absolute",
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
});
