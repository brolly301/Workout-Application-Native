import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HistoryList from "../components/History/HistoryList";
import ProfileCharts from "../components/Profile/ProfileCharts";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProfileSettings from "../components/Profile/ProfileSettings";
import useUserContext from "../hooks/useUserContext";
import { EvilIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { logout } = useUserContext();

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => toggleModal()}>
          <Ionicons
            style={styles.headerRight}
            name="settings-sharp"
            size={24}
            color="#D5A8F8"
          />
        </TouchableOpacity>
      ),
    });
  }, [modalVisible]);

  return (
    <View style={[styles.container]}>
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
      <Text style={styles.subTitle}>Activity</Text>
      <ProfileCharts />
      <Text style={styles.subTitle}>Recent Workouts</Text>
      <View style={styles.recentWorkoutsContainer}>
        <HistoryList limit={2} />
      </View>
    </View>
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
  subTitle: {
    fontSize: 28,
    fontWeight: "500",
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
    height: "20%",
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
});
