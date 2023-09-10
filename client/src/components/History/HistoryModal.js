import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import DeleteModal from "../DeleteModal";

export default function HistoryModal({
  routine,
  handleDeleteWorkout,
  modalVisible,
  setModalVisible,
}) {
  const navigation = useNavigation();

  const [cancelModalVisible, setCancelModalVisible] = useState(false);

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
              <View>
                <View style={{ alignSelf: "flex-end" }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <EvilIcons
                      style={styles.modalIconClose}
                      name="close"
                      size={32}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.noTitle}>No workout found!</Text>
                <Text style={styles.noSubTitle}>
                  You haven't completed any workouts for this date yet. Please
                  click the button below to begin a new workout for this date.
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("CreateWorkout")}>
                  <Text style={styles.buttonText}>Start Workout</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setCancelModalVisible(!cancelModalVisible);
                      setModalVisible(!modalVisible);
                    }}>
                    <EvilIcons
                      style={styles.modalIconDelete}
                      name="trash"
                      size={33}
                      color="black"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("EditWorkout", { workout: routine });
                      setModalVisible(!modalVisible);
                    }}>
                    <EvilIcons
                      style={styles.modalIconClose}
                      name="pencil"
                      size={33}
                      color="black"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <EvilIcons
                      style={styles.modalIconClose}
                      name="close"
                      size={32}
                      color="black"
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
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ height: "72%" }}>
                    {routine?.exercises?.map((exercise, index) => {
                      return (
                        <>
                          <Text
                            style={styles.exerciseName}
                            key={Math.floor(Math.random() * 1000)}>
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
                                <Text style={styles.setText}>
                                  {set.reps || 0}
                                </Text>
                              ))}
                            </View>
                            <View style={styles.setsContainer}>
                              <Text style={styles.exerciseText}>KG</Text>
                              {exercise?.sets?.map((set, index) => (
                                <Text style={styles.setText}>
                                  {set.kg || 0}
                                </Text>
                              ))}
                            </View>
                          </View>
                        </>
                      );
                    })}
                  </ScrollView>
                </View>
              </>
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
  mainContainer: {
    paddingBottom: 10,
    height: "100%",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  setHeaderText: {
    textAlign: "center",
    fontWeight: "600",
  },
  exerciseName: {
    textAlign: "center",
    fontSize: 17,
    marginVertical: 10,
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
  noTitle: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  noSubTitle: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: "center",
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

  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
