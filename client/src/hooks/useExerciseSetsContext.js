import { useContext } from "react";
import { Context } from "../context/ExerciseSetContext";

export default function useExerciseSetsContext() {
  return useContext(Context);
}
