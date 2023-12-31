// import "../../_mockLocation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Map from "../../components/Tracks/Map";
import { useIsFocused } from "@react-navigation/native";
import HeaderPanel from "../../components/HeaderPanel";
import useLocationContext from "../../hooks/useLocationContext";
import useLocation from "../../hooks/useLocation";
import CancelModal from "../../components/Tracks/CancelModal";
import FinishModal from "../../components/Tracks/FinishModal";
import Timer from "../../components/Workout/Timer";
import useTimerContext from "../../hooks/useTimerContext.js";
import validation from "../../components/Tracks/TrackValidation";

const TrackCreateScreen = () => {
  const {
    addLocation,
    state,
    startRecording,
    stopRecording,
    reset,
    changeName,
    changeDescription,
  } = useLocationContext();
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [finishModalVisible, setFinishModalVisible] = useState(false);
  const isFocused = useIsFocused();
  const { startStopTimer } = useTimerContext();
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    setErrors(validation(state.name, state.locations));
  };

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
      <FinishModal
        modalVisible={finishModalVisible}
        setModalVisible={setFinishModalVisible}
        state={state}
        reset={reset}
        handleValidation={handleValidation}
      />

      <CancelModal
        setModalVisible={setCancelModalVisible}
        modalVisible={cancelModalVisible}
        state={state}
        reset={reset}
      />
      <View style={styles.headerIcon}>
        <TouchableOpacity
          onPress={() => setCancelModalVisible(!cancelModalVisible)}
        >
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFinishModalVisible(true)}>
          <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Track Run</Text>
        <View style={{ marginBottom: 20 }}>
          <Timer />
        </View>
      </View>
      {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
      <TextInput
        style={styles.nameInput}
        onChangeText={changeName}
        placeholder='Name'
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder='Description'
        onChangeText={changeDescription}
      />
      <View style={{ marginBottom: 15 }} />
      {errors.locations && (
        <Text style={styles.errors}>{errors.locations}</Text>
      )}
      {isFocused ? <Map /> : null}
      {err ? <Text>Please enable location services to continue.</Text> : null}
      {state.recording ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            startStopTimer(false);
            stopRecording();
          }}
        >
          <Text style={styles.buttonText}>Stop Run</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            startStopTimer(true);
            startRecording();
          }}
        >
          <Text style={styles.buttonText}>Begin Run</Text>
        </TouchableOpacity>
      )}
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
  nameInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 35,
    marginBottom: 10,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 50,
    paddingVertical: 7,
    paddingLeft: 7,
    paddingBottom: 25,
  },
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
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errors: {
    color: "red",
    marginBottom: 10,
  },
});
