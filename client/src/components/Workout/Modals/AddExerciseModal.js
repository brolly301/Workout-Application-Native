import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ExerciseList from "../ExerciseList";
import SearchBar from "../../SearchBar";
import useExerciseContext from "../../../hooks/useExerciseContext";
import { EvilIcons } from "@expo/vector-icons";
const AddExerciseModal = ({
  modalVisible,
  setModalVisible,
  handleSubmit,
  setState,
}) => {
  const { state } = useExerciseContext();
  const [search, setSearch] = useState();

  const updatedState = (term) =>
    state?.filter((exercise) => exercise.name.match(term));

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <EvilIcons
                style={styles.modalIconClose}
                name="close"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={styles.selectExercise}>Select Exercise</Text>

            <SearchBar placeholder={"exercises"} setText={setSearch} />
            <View style={{ flex: 1 }}>
              <ExerciseList
                state={state}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleSubmit={handleSubmit}
                setState={setState}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddExerciseModal;

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Greyed-out background
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    height: "80%",
  },
  modalIconClose: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  selectExercise: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
