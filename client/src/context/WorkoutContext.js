import Server from "../api/Server";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "get_workouts":
      return action.payload;
    case "add_workout":
      return [...state, { ...action.payload }];
    case "delete_workout":
      return state.filter((workout) => workout.id !== action.payload.id);
    default:
      return state;
  }
};

const getWorkouts = (dispatch) => async () => {
  try {
    const res = await Server.get("/workouts/allWorkouts");
    dispatch({ type: "get_workouts", payload: res.data });
  } catch (e) {}
};

const addWorkout = (dispatch) => async (exerciseData) => {
  try {
    const res = await Server.post("/workouts/addWorkout", exerciseData);
    console.log(res);
    dispatch({ type: "add_workout", payload: exerciseData });
  } catch (e) {
    dispatch({ type: "add_error", payload: e.response.data.error });
  }
};

const deleteWorkout = (dispatch) => async (id) => {
  try {
    const res = await Server.delete(`/workouts/deleteWorkout/${id}`);
    dispatch({ type: "delete_workout", payload: id });
  } catch (e) {
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { addWorkout, getWorkouts, deleteWorkout },
  { errorMessage: "" }
);
