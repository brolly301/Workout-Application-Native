import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import useTrackContext from "../../hooks/useTrackContext";
import { useNavigation } from "@react-navigation/native";

const FinishModal = ({ modalVisible, setModalVisible, reset, state }) => {
  const { addTrack } = useTrackContext();
  const navigation = useNavigation();

  console.log(state);

  const saveTrack = async () => {
    await addTrack(state.name, state.description, state.locations);
    reset();
    navigation.navigate("Workout");
  };

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Finish Workout</Text>
            <Text style={styles.subTitle}>
              Are you sure you are ready to finish?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.closeButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => saveTrack()}>
                <Text style={styles.closeButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FinishModal;

const styles = StyleSheet.create({
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
    width: "80%",
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: "blue",
    fontSize: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#5bc255",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
  },
});
