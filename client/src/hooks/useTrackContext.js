import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";

export default function useTrackContext() {
  return useContext(TrackContext);
}
