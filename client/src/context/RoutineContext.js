import React, { createContext, useState } from "react";
import Server from "../api/Server";

const RoutineContext = createContext();

export function RoutineProvider({ children }) {
  const [routine, setRoutine] = useState({
    routineID: "",
    userID: "",
    name: "",
    description: "",
    date: new Date(),
    exercises: [],
  });

  const [allRoutines, setAllRoutines] = useState([]);

  const getRoutines = async () => {
    try {
      const res = await Server.get("/routines/allRoutines");
      setAllRoutines(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addRoutine = async (newRoutine, callback) => {
    try {
      const res = await Server.post("/routines/addRoutine", newRoutine);
      setAllRoutines((prevRoutines) => [...prevRoutines, res.data]);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteRoutine = async (id, routineID) => {
    try {
      const res = await Server.delete(`/routines/deleteRoutine/${routineID}`);
      setAllRoutines((prevRoutines) =>
        prevRoutines.filter((routine) => {
          return routine.routineID !== routineID;
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const editRoutine = async (id, routine, callback) => {
    const res = await Server.patch("/routines/editRoutine", { id, ...routine });

    setAllRoutines(
      allRoutines.map((oldRoutine) => {
        return oldRoutine._id === id ? routine : oldRoutine;
      })
    );
    if (callback) {
      callback();
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
    editRoutine,
    getRoutines,
  };

  return (
    <RoutineContext.Provider value={values}>{children}</RoutineContext.Provider>
  );
}

export default RoutineContext;
