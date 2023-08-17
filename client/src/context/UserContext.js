import Server from "../api/Server";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
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
      console.log(e);
    }
  };
};
const register = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await Server.post("/register", { email, password });
      console.log(res);
    } catch (e) {
      console.log(e);
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
