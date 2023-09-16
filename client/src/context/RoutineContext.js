import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_routines":
      return action.payload;
    case "add_routine":
      return Array.isArray(state) ? [...state, { ...action.payload }] : state;
    case "delete_routine":
      return state.filter((routine) => {
        return routine.routineID !== action.payload;
      });
    case "edit_routine":
      return state.map((routine) => {
        return routine._id === action.payload.id ? action.payload : routine;
      });
    default:
      return state;
  }
};

const getRoutines = (dispatch) => async () => {
  try {
    const res = await Server.get("/routines/allRoutines");
    dispatch({ type: "get_routines", payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

const addRoutine = (dispatch) => async (newRoutine, callback) => {
  try {
    const res = await Server.post("/routines/addRoutine", newRoutine);
    dispatch({ type: "add_routine", payload: newRoutine });
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e);
  }
};
const deleteRoutine = (dispatch) => async (id, routineID) => {
  try {
    const res = await Server.delete(`/routines/deleteRoutine/${routineID}`);
    dispatch({ type: "delete_routine", payload: routineID });
  } catch (e) {
    console.log(e);
  }
};

const editRoutine = (dispatch) => async (id, routine, callback) => {
  const res = await Server.patch("/routines/editRoutine", { id, ...routine });

  dispatch({ type: "edit_routine", payload: { id, ...routine } });
  if (callback) {
    callback();
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  {
    getRoutines,
    addRoutine,
    deleteRoutine,
    editRoutine,
  },
  []
);
