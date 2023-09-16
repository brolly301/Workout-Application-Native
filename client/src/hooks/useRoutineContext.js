import { useContext } from "react";
import { Context } from "../context/RoutineContext";

export default function useRoutineContext() {
  return useContext(Context);
}
