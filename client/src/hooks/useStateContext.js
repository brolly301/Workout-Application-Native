import { useContext } from "react";
import StateContext from "../context/StateContext";

export default useStateContext = () => {
  return useContext(StateContext);
};
