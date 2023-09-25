import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const { addTrack } = useContext(TrackContext);
  const navigation = useNavigation();
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await addTrack(name, locations);
    reset();
    navigation.navigate("Workout");
  };

  return [saveTrack];
};
