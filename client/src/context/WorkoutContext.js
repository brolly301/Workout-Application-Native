import Server from "../api/Server";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "get_workouts":
      return action.payload;
    case "add_workout":
      return Array.isArray(state) ? [...state, { ...action.payload }] : state;
    case "delete_workout":
      return state.filter((workout) => {
        return workout.workoutID !== action.payload;
      });
    case "edit_workout":
      return state.map((workout) => {
        return workout._id === action.payload.id ? action.payload : workout;
      });
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

const addWorkout = (dispatch) => async (exerciseData, callback) => {
  try {
    const res = await Server.post("/workouts/addWorkout", exerciseData);
    console.log(res);
    dispatch({ type: "add_workout", payload: exerciseData });
    if (callback) {
      callback();
    }
  } catch (e) {
    // dispatch({ type: "add_error", payload: e.response.data.error });
    console.log(e);
  }
};

const deleteWorkout = (dispatch) => async (id, workoutID) => {
  try {
    const res = await Server.delete(`/workouts/deleteWorkout/${workoutID}`);
    dispatch({ type: "delete_workout", payload: workoutID });
  } catch (e) {
    console.log(e);
  }
};

const editWorkout = (dispatch) => async (id, workout, callback) => {
  try {
    const res = await Server.patch("/workouts/editWorkout", { id, ...workout });
    dispatch({ type: "edit_workout", payload: { id, ...workout } });

    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { addWorkout, getWorkouts, deleteWorkout, editWorkout },
  { errorMessage: "" }
);
