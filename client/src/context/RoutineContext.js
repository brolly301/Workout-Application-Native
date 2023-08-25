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

  const addRoutine = async (routine) => {
    try {
      const res = await Server.post("/routines/addRoutine", routine);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const values = {
    routine,
    setRoutine,
    addRoutine,
    allRoutines,
    setAllRoutines,
  };

  return (
    <RoutineContext.Provider value={values}>{children}</RoutineContext.Provider>
  );
}

export default RoutineContext;
