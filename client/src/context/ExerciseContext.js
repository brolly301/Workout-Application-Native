import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_exercise":
      return Array.isArray(state) ? [...state, { ...action.payload }] : state;
    case "edit_exercise":
      return state.map((exercise) => {
        return exercise.exerciseID === action.payload.exerciseID
          ? action.payload
          : exercise;
      });

    case "delete_exercise":
      return state.filter((exercise) => exercise.exerciseID !== action.payload);
    case "get_exercises":
      return action.payload;
    default:
      return state;
  }
};

const addExercise = (dispatch) => async (exerciseData, callback) => {
  try {
    const res = await Server.post("/exercises/addExercise", {
      ...exerciseData,
    });
    console.log(res);
    dispatch({
      type: "add_exercise",
      payload: { ...exerciseData },
    });
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e.response.data);
  }
};

const editExercise = (dispatch) => async (exerciseData, callback) => {
  try {
    const res = await Server.patch("/exercises/editExercise", {
      ...exerciseData,
    });
    console.log(res);
    dispatch({
      type: "edit_exercise",
      payload: { ...exerciseData },
    });
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e.response.data);
  }
};

const deleteExercise = (dispatch) => async (id, exerciseID) => {
  const res = await Server.delete(`/exercises/deleteExercise/${exerciseID}`);
  dispatch({ type: "delete_exercise", payload: exerciseID });
};

const getExercises = (dispatch) => async () => {
  try {
    const res = await Server.get("/exercises/allExercises");
    dispatch({ type: "get_exercises", payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { addExercise, editExercise, deleteExercise, getExercises },
  []
);
