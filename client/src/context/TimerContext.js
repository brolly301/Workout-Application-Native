import React, { createContext, useEffect, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
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
    time,
    resetTimer,
    startStopTimer,
  };

  return (
    <TimerContext.Provider value={values}>{children}</TimerContext.Provider>
  );
};

export default TimerContext;
