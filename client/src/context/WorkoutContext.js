import Server from "../api/Server";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_workouts":
      return action.payload;
    case "add_workout":
      return action.payload;
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
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { addWorkout, getWorkouts },
  {}
);
