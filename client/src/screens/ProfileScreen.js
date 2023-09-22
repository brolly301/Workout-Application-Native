import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HistoryList from "../components/History/HistoryList";
import ProfileCharts from "../components/Profile/ProfileCharts";
import ProfileWorkoutChart from "../components/Profile/ProfileWorkoutChart";
import { Ionicons } from "@expo/vector-icons";
import useUserContext from "../hooks/useUserContext";
import { EvilIcons } from "@expo/vector-icons";
import useWorkoutContext from "../hooks/useWorkoutContext";
import HeaderPanel from "../components/HeaderPanel";
import Spacer from "../components/Spacer";
const screenWidth = Dimensions.get("window").width;

export default function ProfileScreen() {
  const { logout } = useUserContext();
  const { state } = useWorkoutContext();

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderPanel>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => toggleModal()}>
          <Ionicons
            style={styles.headerRight}
            name="settings-sharp"
            size={32}
            color="#D5A8F8"
          />
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            toggleModal();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => toggleModal()}>
                <EvilIcons
                  style={styles.modalIcon}
                  name="close"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Settings</Text>
              <TouchableOpacity style={styles.button} onPress={() => logout()}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Profile</Text>
        <ProfileDetails />
        <Text style={styles.activity}>Activity</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.chartContainer}>
          <View style={styles.exerciseChart}>
            <ProfileCharts />
          </View>
          <View style={styles.workoutChart}>
            <ProfileWorkoutChart />
          </View>
        </ScrollView>
        <Text style={styles.recentWorkout}>Recent Workouts</Text>
        <View style={styles.recentWorkoutsContainer}>
          <HistoryList state={state} limit={4} />
        </View>
        <Spacer />
      </HeaderPanel>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: "100%",
    display: "flex",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  activity: {
    fontSize: 22,
    fontWeight: "bold",
  },
  recentWorkout: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  recentWorkoutsContainer: {
    flex: 1,
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
    marginBottom: 200,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: "blue",
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    width: "70%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  modalIcon: {
    textAlign: "right",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  headerIcon: {
    alignSelf: "flex-end",
  },

  exerciseChart: {
    width: screenWidth - 30,
    // marginLeft: 20,
  },
  workoutChart: {
    width: screenWidth - 30,
    marginLeft: 20,
  },
});
