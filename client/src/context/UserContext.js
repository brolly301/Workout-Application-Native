import Server from "../api/Server";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from "@react-navigation/native";

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
    case "get_user_details":
      return {
        userDetails: action.payload.userDetails,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

const login = (dispatch) => {
  return async ({ email, password, callback }) => {
    // const navigation = useNavigation();
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

const getUserDetails = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const res = await Server.get("/userDetails");
    dispatch({
      type: "get_user_details",
      payload: { userDetails: res.data, token: token },
    });
  } catch (e) {
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { login, register, logout, getUserDetails },
  { token: null, errorMessage: "", userDetails: {} }
);
