import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useRoutineContext from "../../../hooks/useRoutineContext";

const RoutineModal = ({ modalVisible, setModalVisible, routine }) => {
  const { deleteRoutine } = useRoutineContext();
  const navigation = useNavigation();

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  deleteRoutine(routine._id, routine.routineID);
                  setModalVisible(!modalVisible);
                }}>
                <EvilIcons
                  style={styles.modalIconDelete}
                  name="trash"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <EvilIcons
                  style={styles.modalIconClose}
                  name="close"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  navigation.navigate("EditRoutine", { routine: routine })
                }>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() =>
                  navigation.navigate("RoutineWorkout", {
                    screen: "CreateWorkout",
                    params: { routine: routine },
                  })
                }>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.exerciseContainer}>
              {routine?.exercises?.map((exercise) => {
                return (
                  <View
                    key={Math.floor(Math.random() * 1000)}
                    style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.exerciseText}>
                      {exercise.sets.length}X Set -
                    </Text>
                    <Text style={styles.exerciseText}> {exercise.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RoutineModal;

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
    height: "70%",
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
  modalIconClose: {
    marginBottom: 10,
  },
  modalIconDelete: {
    marginBottom: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },

  textContainer: {
    padding: 15,
  },

  icon: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  type: {
    fontSize: 16,
  },
  exerciseContainer: {
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    borderRadius: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "lightgreen",
    fontSize: 18,
    marginRight: 20,
  },
  deleteButtonText: {
    color: "red",
    fontSize: 18,
    marginLeft: 20,
  },
  editButtonText: {
    color: "#D5A8F8",
    fontSize: 18,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
