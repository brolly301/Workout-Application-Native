import { useContext } from "react";
import { Context } from "../context/WorkoutContext";

const useWorkoutContext = () => {
  return useContext(Context);
};

export default useWorkoutContext;
