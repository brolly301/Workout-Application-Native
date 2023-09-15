import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import validation from "./ProfileValidation";
import { EvilIcons } from "@expo/vector-icons";
import Input from "../Input";
import useUserContext from "../../hooks/useUserContext";

const ProfileEditModal = ({ modalVisible, toggleModal }) => {
  const [errors, setErrors] = useState({});
  const { state, editUserDetails } = useUserContext();
  const [firstName, setFirstName] = useState(state.userDetails?.firstName);
  const [lastName, setLastName] = useState(state.userDetails?.lastName);
  const [email, setEmail] = useState(state.userDetails?.email);

  const handleValidation = () => {
    setErrors(validation({ firstName, lastName, email }));
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => toggleModal()}>
              <EvilIcons name="close" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Profile Details</Text>
            <Input
              value={firstName}
              field={"First Name"}
              setText={setFirstName}
              error={errors.firstName}
            />
            <Input
              value={lastName}
              field={"Last Name"}
              setText={setLastName}
              error={errors.lastName}
            />
            <Input
              value={email}
              field={"Email"}
              setText={setEmail}
              error={errors.email}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                  if (!handleValidation()) {
                    try {
                      editUserDetails({ firstName, lastName, email }, () => {
                        toggleModal();
                      });
                    } catch (err) {
                      console.log(err);
                    }
                  }
                }}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileEditModal;

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
  },
  saveButton: {
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#5bc255",
    fontWeight: "500",
    textAlign: "center",
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 20,
  },
});
