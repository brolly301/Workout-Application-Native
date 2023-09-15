import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import ProfileEditModal from "./ProfileEditModal";

export default function ProfileDetails() {
  const { state } = useUserContext();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <ProfileEditModal toggleModal={toggleModal} modalVisible={modalVisible} />
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
      />
      <View style={styles.subContainer}>
        <Text style={styles.name}>
          {state.userDetails?.firstName} {state.userDetails?.lastName}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => toggleModal()}>
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
    marginTop: 4,
    fontSize: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
  subContainer: {
    padding: 18,
    marginLeft: 5,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
