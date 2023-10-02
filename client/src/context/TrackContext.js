import createDataContext from "./createDataContext";
import Server from "../api/Server";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "get_tracks":
      return action.payload;
    case "add_track":
      return [...state, action.payload];
    case "delete_track":
      return state.filter((track) => track._id !== action.payload);
    case "edit_track":
      return state.map((track) =>
        track._id === action.payload._id ? action.payload : track
      );
    default:
      return state;
  }
};

const getTracks = (dispatch) => async () => {
  const res = await Server.get("/track");
  dispatch({ type: "get_tracks", payload: res.data });
};
const addTrack = (dispatch) => async (name, description, locations) => {
  await Server.post("/track", { name, description, locations });
  dispatch({ type: "add_track", payload: { name, description, locations } });
};
const deleteTrack = (dispatch) => async (trackID, id) => {
  const res = await Server.delete(`/track/${id}`);
  dispatch({ type: "delete_track", payload: id });
};

const editTrack = (dispatch) => async (id, name, description) => {
  const res = await Server.patch(`/track`, { id, name, description });
  dispatch({ type: "edit_track", payload: res.data });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { getTracks, addTrack, deleteTrack, editTrack },
  []
);
