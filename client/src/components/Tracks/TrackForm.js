import {
  StyleSheet,
  Text,
  View,
  Input,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Spacer from "../Spacer";
import useLocationContext from "../../hooks/useLocationContext";
import useSaveTrack from "../../hooks/useSaveTrack";

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useLocationContext();
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Spacer />
      <Spacer />
      <TextInput
        value={state.name}
        placeholder="Enter name"
        onChangeText={changeName}
      />
      {state.recording ? (
        <TouchableOpacity style={styles.button} onPress={stopRecording}>
          <Text style={styles.buttonText}>Stop Run</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={startRecording}>
          <Text style={styles.buttonText}>Begin Run</Text>
        </TouchableOpacity>
      )}
      <Spacer />
      {!state.recording && state.locations.length ? (
        <TouchableOpacity style={styles.button} onPress={saveTrack}>
          <Text style={styles.buttonText}>Save Run</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D5A8F8",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});
