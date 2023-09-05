import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useRoutineContext from "../../../hooks/useRoutineContext";

const RoutineModal = ({ modalVisible, setModalVisible, routine }) => {
  const { deleteRoutine } = useRoutineContext();
  const navigation = useNavigation();

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  deleteRoutine(routine._id, routine.routineID);
                  setModalVisible(!modalVisible);
                }}
              >
                <EvilIcons
                  style={styles.modalIconDelete}
                  name='trash'
                  size={33}
                  color='black'
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditRoutine", { routine: routine });
                  setModalVisible(!modalVisible);
                }}
              >
                <EvilIcons
                  style={styles.modalIconClose}
                  name='pencil'
                  size={33}
                  color='black'
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RoutineWorkout", {
                    screen: "CreateWorkout",
                    params: { routine: routine },
                  });
                  setModalVisible(!modalVisible);
                }}
              >
                <AntDesign
                  style={styles.modalIconClose}
                  name='caretright'
                  size={28}
                  color='black'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <EvilIcons
                  style={styles.modalIconClose}
                  name='close'
                  size={32}
                  color='black'
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{routine?.name}</Text>
              <Text style={styles.subTitle}>
                {routine?.description || "No description"}
              </Text>
            </View>
            <View>
              {routine?.exercises?.map((exercise, index) => {
                return (
                  <>
                    <Text
                      style={styles.exerciseName}
                      key={Math.floor(Math.random() * 1000)}
                    >
                      Exercises {index + 1} - {exercise?.name}
                    </Text>
                    <View style={styles.exerciseContainer}>
                      <View style={styles.setsContainer}>
                        <Text style={styles.exerciseText}>Set</Text>
                        {exercise?.sets?.map((set, index) => (
                          <Text style={styles.setText}>{set.set}</Text>
                        ))}
                      </View>
                      <View style={styles.setsContainer}>
                        <Text style={styles.exerciseText}>Reps</Text>
                        {exercise?.sets?.map((set, index) => (
                          <Text style={styles.setText}>{set.reps || 0}</Text>
                        ))}
                      </View>
                      <View style={styles.setsContainer}>
                        <Text style={styles.exerciseText}>KG</Text>
                        {exercise?.sets?.map((set, index) => (
                          <Text style={styles.setText}>{set.kg || 0}</Text>
                        ))}
                      </View>
                    </View>
                  </>
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
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
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
    flexDirection: "row",
    borderRadius: 5,
    padding: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 5,
    marginBottom: 20,
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
    marginBottom: 20,
  },
  titleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },
  exerciseName: {
    textAlign: "center",
    fontWeight: "bold",
  },
  exerciseText: {
    fontWeight: "bold",
  },
  setsContainer: {
    alignItems: "center",
  },
  setText: {
    marginVertical: 4,
  },
});
