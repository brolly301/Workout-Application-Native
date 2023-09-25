import "../../_mockLocation";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect } from "react";
import Map from "../../components/Tracks/Map";
import { useIsFocused } from "@react-navigation/native";
import HeaderPanel from "../../components/HeaderPanel";
import useLocationContext from "../../hooks/useLocationContext";
import useLocation from "../../hooks/useLocation";
import TrackForm from "../../components/Tracks/TrackForm";

const TrackCreateScreen = () => {
  const { addLocation, state } = useLocationContext();
  const isFocused = useIsFocused();

  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  // Ensure that useLocation is used correctly based on its implementation
  const [err] = useLocation(isFocused || state.recording, callback);

  useEffect(() => {
    if (isFocused) {
      // Logic to run when the screen is focused
    }
  }, [isFocused]);

  return (
    <HeaderPanel>
      <View style={styles.headerIcon}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Track Run</Text>
      {/* Render the Map component based on screen focus */}
      {isFocused ? <Map /> : null}
      {err ? <Text>Please enable location services to continue.</Text> : null}
      <TrackForm />
    </HeaderPanel>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  finishButton: {
    color: "#5bc255",
    fontSize: 18,
  },
  cancelButton: {
    color: "red",
    fontSize: 18,
  },
  resetButton: {
    color: "#D5A8F8",
    fontSize: 18,
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
