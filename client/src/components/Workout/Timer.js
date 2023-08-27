import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import useStateContext from "../../hooks/useStateContext";

const Timer = () => {
  const { time } = useStateContext();

  // Hours calculation
  const hours = Math.floor(time / 36000);

  // Minutes calculation
  const minutes = Math.floor((time % 36000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 600) / 60);

  // Milliseconds calculation
  const milliseconds = time % 60;

  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.timer}>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  startButton: {
    borderColor: "black",
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  timer: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "500",
  },
});
