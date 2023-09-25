import createDataContext from "./createDataContext";
import Server from "../api/Server";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "get_tracks":
      return action.payload;
    default:
      return state;
  }
};

const getTracks = (dispatch) => async () => {
  const res = await Server.get("/track");
  dispatch({ type: "get_tracks", payload: res.data });
};
const addTrack = (dispatch) => async (name, locations) => {
  await Server.post("/track", { name, locations });
};
const deleteTrack = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { getTracks, addTrack, deleteTrack },
  []
);
