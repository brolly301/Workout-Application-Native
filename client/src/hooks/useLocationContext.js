import { useContext } from "react";
import { Context } from "../context/LocationContext";

export default function useLocationContext() {
  return useContext(Context);
}
