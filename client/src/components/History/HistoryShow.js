import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { formatDate, formatTime } from "../DateTime";

const HistoryShow = ({ setRoutine, setModalVisible, modalVisible, item }) => {
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
            <Text style={styles.text}>{formatDate(item.date)}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {item.exercises.length || 0} Exercises
            </Text>
            <Text style={styles.text}>{formatTime(item.time)}</Text>
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
    justifyContent: "space-between",
    marginLeft: 45,
    width: "79%",
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
