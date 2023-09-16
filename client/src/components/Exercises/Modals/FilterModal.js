import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import FilterModalOptions from "./FilterModalOptions";

const FilterModal = ({ modalVisible, setModalVisible, setSelected }) => {
  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity
          style={styles.overlay} // Transparent overlay covering the entire screen
          activeOpacity={1}
          onPressOut={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView style={styles.scrollView}>
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Custom Exercises"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Abdominals"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Abductors"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Biceps"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Calves"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Chest"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Forearms"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Glutes"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Hamstrings"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Lats"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Lower back"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Middle back"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Neck"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Quadriceps"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions
                  setSelected={setSelected}
                  name="Shoulders"
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                />
                <FilterModalOptions setSelected={setSelected} name="Traps" />
                <FilterModalOptions setSelected={setSelected} name="Triceps" />
              </ScrollView>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 15,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 175,
    marginLeft: 15,
    width: "47%",
    borderWidth: 1,
    textAlign: "center",
    borderColor: "black",
    height: "50%",
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  scrollView: {
    flex: 1,
  },
});
