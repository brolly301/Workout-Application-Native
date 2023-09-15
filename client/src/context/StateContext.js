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
      intervalID = setInterval(
        () => setTimer((prevTime) => prevTime + 1),
        1000
      );
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

  const values = {
    selected,
    setSelected,
    time,
    resetTimer,
    startStopTimer,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export default StateContext;
