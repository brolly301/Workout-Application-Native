import createDataContext from "./createDataContext";
import Server from "../api/Server";
import { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_exercise":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          name: action.payload.name,
          bodyPart: action.payload.bodyPart,
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

const addExercise = (dispatch) => (name, bodyPart, category) => {
  dispatch({ type: "add_exercise", payload: { name, bodyPart, category } });
};

const editExercise = (dispatch) => (id, name, bodyPart, category) => {
  dispatch({
    type: "edit_exercise",
    payload: { id, name, bodyPart, category },
  });
};

const deleteExercise = (dispatch) => (id) => {
  dispatch({ type: "delete_exercise", payload: id });
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
