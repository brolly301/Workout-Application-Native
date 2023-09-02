import createDataContext from "./createDataContext";
import Server from "../api/Server";
import { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_exercise":
      return [
        ...state,
        {
          userID: action.payload.userID,
          name: action.payload.name,
          primaryMuscle: action.payload.primaryMuscle,
          secondaryMuscle: action.payload.secondaryMuscle,
          equipment: action.payload.equipment,
          category: action.payload.category,
        },
      ];
    case "edit_exercise":
      return state.map((exercise) => {
        return exercise.id === action.payload.id ? action.payload : exercise;
      });
    case "delete_exercise":
      return state.filter((exercise) => exercise.id !== action.payload);
    case "get_exercises":
      return action.payload;
    default:
      return state;
  }
};

const addExercise =
  (dispatch) =>
  async (
    userID,
    name,
    primaryMuscle,
    secondaryMuscle,
    equipment,
    category,
    callback
  ) => {
    const res = await Server.post("/exercises/addExercise", {
      userID,
      name,
      primaryMuscle,
      secondaryMuscle,
      equipment,
      category,
    });
    console.log(res);
    dispatch({
      type: "add_exercise",
      payload: {
        userID,
        name,
        primaryMuscle,
        secondaryMuscle,
        equipment,
        category,
      },
    });
    if (callback) {
      callback();
    }
  };

const editExercise =
  (dispatch) =>
  async (
    id,
    name,
    primaryMuscle,
    secondaryMuscle,
    equipment,
    category,
    callback
  ) => {
    const res = await Server.patch("/exercises/editExercise", {
      id,
      name,
      primaryMuscle,
      secondaryMuscle,
      equipment,
      category,
    });
    dispatch({
      type: "edit_exercise",
      payload: {
        id,
        name,
        primaryMuscle,
        secondaryMuscle,
        equipment,
        category,
      },
    });
    dispatch({ type: "edit_workout", payload: { workout, id } });
    if (callback) {
      callback();
    }
  };

const deleteExercise = (dispatch) => async (id) => {
  const res = await Server.delete(`/exercises/deleteExercise/${id}`);
  dispatch({ type: "delete_exercise", payload: id });
  getExercises();
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
