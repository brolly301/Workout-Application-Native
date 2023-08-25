import { useContext } from "react";
import RoutineContext from "../context/RoutineContext";

export default function useRoutineContext() {
  return useContext(RoutineContext);
}
