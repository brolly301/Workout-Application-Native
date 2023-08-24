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

export default function HistoryList({ limit }) {
  const { state } = useWorkoutContext();
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
        data={state?.slice(0, limit)}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
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
                    <Text>{item.date}</Text>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text>{item.time}</Text>
                    <Text>{item.exercises.length || 0} Exercises</Text>
                  </View>
                </View>
                {isExpanded && (
                  <>
                    <HistoryShow item={item} />
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
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    marginBottom: 20,

    // padding: 20,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {},
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    // marginHorizontal: 10,
    // marginRight: 40,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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
