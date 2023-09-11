import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useStateContext from "../../../hooks/useStateContext";

const FinishModal = ({
  modalVisible,
  setModalVisible,
  handleSubmit,
  handleValidation,
  handleChangeTime,
}) => {
  const { resetTimer, startStopTimer, time } = useStateContext();

  const onModalOpen = () => {
    handleChangeTime(time);
  };

  // Use the useEffect hook to listen for changes in modalVisible
  useEffect(() => {
    if (modalVisible) {
      startStopTimer(false);
      // Call the function when the modal becomes visible
      onModalOpen();
    }
  }, [modalVisible]);

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
                  startStopTimer(true);

                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.closeButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  startStopTimer(true);
                  if (!handleValidation())
                    try {
                      handleSubmit(() => {
                        resetTimer();
                        startStopTimer(false);
                      });
                    } catch (e) {
                      console.log(e);
                    }
                  else {
                  }
                }}>
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
