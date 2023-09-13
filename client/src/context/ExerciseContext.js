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
          exerciseID: action.payload.exerciseID,
          name: action.payload.name,
          primaryMuscle: action.payload.primaryMuscle,
          secondaryMuscle: action.payload.secondaryMuscle,
          equipment: action.payload.equipment,
          category: action.payload.category,
        },
      ];
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

const addExercise =
  (dispatch) =>
  async (
    userID,
    exerciseID,
    name,
    primaryMuscles,
    secondaryMuscles,
    equipment,
    category,
    force,
    mechanic,
    level,
    callback
  ) => {
    try {
      const res = await Server.post("/exercises/addExercise", {
        userID,
        exerciseID,
        name,
        primaryMuscles,
        secondaryMuscles,
        equipment,
        category,
        force,
        mechanic,
        level,
      });
      console.log(res);
      dispatch({
        type: "add_exercise",
        payload: {
          userID,
          exerciseID,
          name,
          primaryMuscles,
          secondaryMuscles,
          equipment,
          category,
          force,
          mechanic,
          level,
        },
      });
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e.response.data);
    }
  };

const editExercise =
  (dispatch) =>
  async (
    id,
    exerciseID,
    userID,
    name,
    primaryMuscles,
    secondaryMuscles,
    equipment,
    category,
    force,
    mechanic,
    level,
    callback
  ) => {
    try {
      const res = await Server.patch("/exercises/editExercise", {
        id,
        exerciseID,
        userID,
        name,
        primaryMuscles,
        secondaryMuscles,
        equipment,
        force,
        mechanic,
        level,
        category,
      });
      console.log(res);
      dispatch({
        type: "edit_exercise",
        payload: {
          id,
          exerciseID,
          userID,
          name,
          primaryMuscles,
          secondaryMuscles,
          equipment,
          force,
          mechanic,
          level,
          category,
        },
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
