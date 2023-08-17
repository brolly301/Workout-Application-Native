import { useContext } from "react";
import { Context } from "../context/UserContext";

const useUserContext = () => {
  return useContext(Context);
};

export default useUserContext;
