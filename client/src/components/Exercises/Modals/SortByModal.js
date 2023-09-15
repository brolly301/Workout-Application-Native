import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SortByModal = ({ modalVisible, setModalVisible, setSelected }) => {
  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeButton}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name="close" size={18} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.dropdownContainer}>
                <Text style={styles.title}>Exercise Name</Text>
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
      </Modal>
    </View>
  );
};

export default SortByModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "flex-start",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 60,
    marginLeft: 15,
    width: "35%",
    borderWidth: 1,
    borderColor: "black",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 5,
  },
  closeButtonText: {
    color: "blue",
    fontSize: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
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
    fontSize: 13,
    marginVertical: 3,
  },
});
