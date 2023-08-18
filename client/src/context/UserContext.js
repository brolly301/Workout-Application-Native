import Server from "../api/Server";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const login = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await Server.post("/login", { email, password });
      console.log(res);
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
      console.log(res.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
};
const logout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  reducer,
  { login, register, logout },
  { isSignedIn: false }
);
