import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Star from "../../../images/star.png";

const WorkoutSummaryModal = ({ setModalVisible, modalVisible, routine }) => {
  // i want the new date to display the day of the week, the month, the day, and the year
  const date = new Date(routine?.date).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
                  setModalVisible(!modalVisible);
                }}>
                <EvilIcons
                  style={styles.modalIconClose}
                  name="close"
                  size={32}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.workoutSummaryTitle}>Workout Summary</Text>
              <View style={styles.starContainer}>
                <Image source={Star} style={styles.stars} />
                <Image source={Star} style={styles.stars} />
                <Image source={Star} style={styles.stars} />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{routine?.name}</Text>
              <Text style={styles.subTitle}>{date || "No description"}</Text>
            </View>
            <View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: "72%" }}>
                {routine?.exercises?.map((exercise, index) => {
                  return (
                    <View key={exercise._id}>
                      <Text style={styles.exerciseName}>
                        Exercises {index + 1} - {exercise?.name}
                      </Text>
                      <View style={styles.exerciseContainer}>
                        <View style={styles.setsContainer}>
                          <Text style={styles.exerciseText}>Set</Text>
                          {exercise?.sets?.map((set, index) => (
                            <Text
                              key={set._id + set.set}
                              style={styles.setText}>
                              {set.set}
                            </Text>
                          ))}
                        </View>
                        <View style={styles.setsContainer}>
                          <Text style={styles.exerciseText}>Reps</Text>
                          {exercise?.sets?.map((set, index) => (
                            <Text
                              key={set._id + set.reps}
                              style={styles.setText}>
                              {set.reps || 0}
                            </Text>
                          ))}
                        </View>
                        <View style={styles.setsContainer}>
                          <Text style={styles.exerciseText}>KG</Text>
                          {exercise?.sets?.map((set, index) => (
                            <Text key={set._id + set.kg} style={styles.setText}>
                              {set.kg || 0}
                            </Text>
                          ))}
                        </View>
                      </View>
                      <View />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WorkoutSummaryModal;

const styles = StyleSheet.create({
  exerciseName: {
    textAlign: "center",
    fontSize: 17,
    marginVertical: 10,
    fontWeight: "bold",
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

  modalIconClose: {
    marginBottom: 10,
  },
  modalIconDelete: {
    marginBottom: 10,
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

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
  workoutSummaryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  stars: {
    height: 35,
    width: 35,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
});
