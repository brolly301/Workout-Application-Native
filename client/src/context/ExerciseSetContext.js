import createDataContext from "./createDataContext";
import Server from "../api/Server";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_exercise_sets":
      return [...state, action.payload];
    case "get_exercise_sets":
      return action.payload;
    default:
      return state;
  }
};

const addExerciseSets = (dispatch) => async (exerciseData) => {
  try {
    const res = await Server.post(
      "/exerciseSets/addExerciseSets",
      exerciseData
    );
    console.log(res);
    dispatch({ type: "add_exercise_sets", payload: exerciseData });
  } catch (e) {
    console.log(e);
  }
};

const getExerciseSets = (dispatch) => async () => {
  try {
    const res = await Server.get("/exerciseSets/allExerciseSets");
    dispatch({ type: "get_exercise_sets", payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const { Provider, Context } = createDataContext(
  reducer,
  { addExerciseSets, getExerciseSets },
  []
);
