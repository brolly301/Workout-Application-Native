import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SortByModal = ({ modalVisible, setModalVisible, setSelected }) => {
  return (
    <View>
      {modalVisible ? (
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <TouchableOpacity
            style={styles.overlay} // Transparent overlay covering the entire screen
            activeOpacity={1} // Prevents the TouchableOpacity from catching touches
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.buttonContainer}>
                  <View style={styles.dropdownContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        setSelected("search");
                        setModalVisible(!modalVisible);
                      }}>
                      <Text style={styles.sortText}>A - Z</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setSelected("reverse");
                        setModalVisible(!modalVisible);
                      }}>
                      <Text style={styles.sortText}>Z - A</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : null}
    </View>
  );
};

export default SortByModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 175,
    marginLeft: 15,
    borderWidth: 1,
    width: "45%",
    borderColor: "black",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  dropdownContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textDecorationStyle: "solid",
  },
  sortText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
});
