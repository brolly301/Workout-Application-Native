import React, { createContext, useEffect, useState } from "react";
import Server from "../api/Server";

const RoutineContext = createContext();

export function RoutineProvider({ children }) {
  const [routine, setRoutine] = useState({
    userID: "12547",
    name: "",
    description: "",
    date: new Date(),
    exercises: [],
  });

  const [allRoutines, setAllRoutines] = useState([]);

  useEffect(() => {
    getRoutines();
  }, []);

  const getRoutines = async () => {
    try {
      const res = await Server.get("/routines/allRoutines");
      setAllRoutines(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addRoutine = async (routine, callback) => {
    try {
      const res = await Server.post("/routines/addRoutine", routine);
      setAllRoutines([...allRoutines, { ...routine }]);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteRoutine = async (id) => {
    try {
      const res = await Server.delete(`/routines/deleteRoutine/${id}`);
      setAllRoutines((prevRoutines) =>
        prevRoutines.filter((routine) => routine.id !== id)
      );
      getRoutines();
    } catch (e) {
      console.log(e);
    }
  };

  const [workoutData, setWorkoutData] = useState({
    userID: "12547",
    name: "",
    description: "",
    date: new Date(),
    time: 0,
    exercises: [],
  });

  const values = {
    routine,
    setRoutine,
    addRoutine,
    allRoutines,
    setAllRoutines,
    workoutData,
    setWorkoutData,
    deleteRoutine,
  };

  return (
    <RoutineContext.Provider value={values}>{children}</RoutineContext.Provider>
  );
}

export default RoutineContext;
