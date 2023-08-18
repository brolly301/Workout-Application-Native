import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const Timer = () => {
  //State to store time
  const [time, setTimer] = useState(0);
  //State to start & stop timer
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => setTimer(time + 1), 10);
    }
    return () => clearInterval(intervalID);
  }, [isRunning, time]);

  //Start and stop timer
  const startStopTimer = () => {
    setIsRunning(!isRunning);
  };

  //Reset timer
  const resetTimer = () => {
    setTimer(0);
  };

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  return (
    <View>
      <TouchableOpacity onPress={() => startStopTimer()}>
        <Text style={styles.timer}>
          {hours}:{minutes.toString().padStart(2, "0")}:
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
