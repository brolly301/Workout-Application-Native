import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useStateContext from "../../hooks/useStateContext";

const Timer = () => {
  const { time } = useStateContext();

  // Hours calculation
  const hours = Math.floor(time / 3600);

  // Minutes calculation
  const minutes = Math.floor((time % 3600) / 60);

  // Seconds calculation
  const seconds = time % 60;

  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.timer}>
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "500",
  },
});
