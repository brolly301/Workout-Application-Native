import { useContext } from "react";
import { Context } from "../context/ExerciseContext";

export default useExerciseContext = () => {
  return useContext(Context);
};
