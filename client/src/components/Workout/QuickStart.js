import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useStateContext from "../../hooks/useStateContext";

export default function QuickStart() {
  const navigation = useNavigation();
  const { startStopTimer } = useStateContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Start</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          startStopTimer(true);
          navigation.navigate("CreateWorkout");
        }}>
        <Text style={styles.buttonText}>New Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateTrack")}>
        <Text style={styles.buttonText}>Track Run</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
