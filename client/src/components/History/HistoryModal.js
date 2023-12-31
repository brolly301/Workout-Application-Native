import { Modal, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DeleteModal from "../DeleteModal";
import HistoryModalNoWorkouts from "./HistoryModalNoWorkouts";
import HistoryModalWorkouts from "./HistoryModalWorkouts";

export default function HistoryModal({
  routine,
  handleDeleteWorkout,
  modalVisible,
  calenderDate,
  setModalVisible,
}) {
  const [cancelModalVisible, setCancelModalVisible] = useState(false);

  console.log(calenderDate);

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={routine ? styles.modalView : styles.noModalView}>
            {!routine ? (
              <HistoryModalNoWorkouts
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                calenderDate={calenderDate}
              />
            ) : (
              <HistoryModalWorkouts
                setCancelModalVisible={setCancelModalVisible}
                cancelModalVisible={cancelModalVisible}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                routine={routine}
              />
            )}
          </View>
        </View>
      </Modal>
      <DeleteModal
        deleteText={"Workout"}
        modalVisible={cancelModalVisible}
        setModalVisible={setCancelModalVisible}
        routine={routine}
        deleteFunction={handleDeleteWorkout}
        id={routine?.workoutID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    height: "70%",
  },
  noModalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    height: "35%",
  },
});
