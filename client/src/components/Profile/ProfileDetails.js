import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import Input from "../Input";

export default function ProfileDetails() {
  const { state, editUserDetails } = useUserContext();
  const [firstName, setFirstName] = useState(state.userDetails?.firstName);
  const [lastName, setLastName] = useState(state.userDetails?.lastName);
  const [email, setEmail] = useState(state.userDetails?.email);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Profile Details</Text>
            <Input
              value={firstName}
              field={"First Name"}
              setText={setFirstName}
            />
            <Input value={lastName} field={"Last Name"} setText={setLastName} />
            <Input value={email} field={"Email"} setText={setEmail} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => toggleModal()}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  editUserDetails({ firstName, lastName, email });
                  toggleModal();
                }}
              >
                <Text style={styles.closeButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
      />
      <View style={styles.subContainer}>
        <Text>
          {state.userDetails?.firstName} {state.userDetails?.lastName}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  button: {},
  buttonText: {
    color: "#D5A8F8",
    fontWeight: "500",
    marginTop: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
  subContainer: {
    padding: 20,
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
    height: "40%",
  },
  closeButton: {
    marginTop: 30,
  },
  closeButtonText: {
    fontSize: 18,
    color: "blue",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
