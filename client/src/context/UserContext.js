import Server from "../api/Server";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const ToastMessage = (type, message) => {
  Toast.show({
    type: type,
    text1: message,
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "register":
      return { errorMessage: "", token: action.payload };
    case "login":
      return { errorMessage: "", token: action.payload };
    case "logout":
      return { token: "" };
    default:
      return state;
  }
};

const login = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await Server.post("/login", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "login", payload: res.data.token });
      ToastMessage("success", "You have successfully logged in. Welcome back.");
    } catch (e) {
      dispatch({ type: "add_error", payload: e.response.data.error });
    }
  };
};
const register = (dispatch) => {
  return async ({ firstName, lastName, email, password }) => {
    try {
      const res = await Server.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "register", payload: res.data.token });
      ToastMessage("success", "You have successfully registered. Welcome.");
    } catch (e) {
      console.log(e.response.data);
    }
  };
};
const logout = (dispatch) => {
  return () => {
    dispatch({ type: "logout" });
  };
};

export const { Provider, Context } = createDataContext(
  reducer,
  { login, register, logout },
  { token: null, errorMessage: "" }
);
