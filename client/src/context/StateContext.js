import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [selected, setSelected] = useState();

  const [time, setTimer] = useState(0);
  //State to start & stop timer
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => setTimer(time + 1), 900);
    }
    return () => clearInterval(intervalID);
  }, [isRunning, time]);

  //Start and stop timer
  const startStopTimer = (isActive) => {
    setIsRunning(isActive);
  };

  //Reset timer
  const resetTimer = () => {
    setTimer(0);
  };

  //Workout Data
  const [workoutData, setWorkoutData] = useState({
    userID: "12547",
    name: "",
    description: "",
    date: new Date(),
    time: time,
    exercises: [],
  });

  const values = {
    selected,
    setSelected,
    time,
    resetTimer,
    startStopTimer,
    workoutData,
    setWorkoutData,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export default StateContext;
