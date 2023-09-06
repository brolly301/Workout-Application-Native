import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const SaveEditModal = ({
  setModalVisible,
  modalVisible,
  saveText,
  handleSubmit,
  handleValidation,
}) => {
  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Save {saveText}</Text>
            <Text style={styles.subTitle}>
              Are you sure you want to update this {saveText.toLowerCase()}?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.closeButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  if (!handleValidation()) {
                    try {
                      handleSubmit();
                    } catch (e) {
                      console.log(e);
                    }
                  }
                  setModalVisible(!modalVisible);
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

export default SaveEditModal;

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
    height: "18%",
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
    color: "lightgreen",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
  },
});
