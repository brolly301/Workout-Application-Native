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
  return async ({ firstName, lastName, email, password }) => {
    try {
      const res = await Server.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(res);
    } catch (e) {
      console.log(e.error);
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
