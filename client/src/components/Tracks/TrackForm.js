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
  const {
    state,
    startRecording,
    stopRecording,
    changeDescription,
    changeName,
  } = useLocationContext();
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Spacer />
      <Spacer />
      {/* <TextInput
        value={state.name}
        placeholder='Name'
        onChangeText={changeName}
      />
      <TextInput
        value={state.description}
        placeholder='Description'
        onChangeText={changeDescription}
      /> */}
      {/* {state.recording ? (
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
      ) : null} */}
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    // marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
