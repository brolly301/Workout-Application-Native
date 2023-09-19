import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import useTimerContext from "../../hooks/useTimerContext.js";

const HistoryModalNoWorkouts = ({
  setModalVisible,
  modalVisible,
  calenderDate,
}) => {
  const navigation = useNavigation();
  const { startStopTimer } = useTimerContext();

  return (
    <View>
      <View style={{ alignSelf: "flex-end" }}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <EvilIcons name="close" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.noTitle}>No workout found!</Text>
      <Text style={styles.noSubTitle}>
        You haven't completed any workouts for this date yet. Please click the
        button below to begin a new workout for this date.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          startStopTimer(true);
          navigation.navigate("CreateWorkout", { calenderDate: calenderDate });
        }}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryModalNoWorkouts;

const styles = StyleSheet.create({
  noTitle: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  noSubTitle: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
