import { useContext } from "react";
import TimerContext from "../context/TimerContext";

export default function useTimerContext() {
  return useContext(TimerContext);
}
