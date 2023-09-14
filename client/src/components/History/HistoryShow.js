import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return (
    <Text>
      {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </Text>
  );
};

const HistoryShow = ({ setRoutine, setModalVisible, modalVisible, item }) => {
  const date = new Date(item.date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setRoutine(item);
          setModalVisible(!modalVisible);
        }}>
        <FontAwesome5
          style={styles.icon}
          name="dumbbell"
          size={24}
          color="black"
        />
        <View style={styles.subContainer}>
          <View style={styles.textContainer2}>
            <Text style={styles.text}>{item.name}</Text>

            <Text style={styles.text}>{date}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{formatTime(item.time)}</Text>
            <Text style={styles.text}>
              {item.exercises.length || 0} Exercises
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryShow;

const styles = StyleSheet.create({
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
    alignItems: "flex-end",
    marginLeft: 20,
  },
  textContainer2: {
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
