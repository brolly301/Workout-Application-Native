import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import RoutineStart from "./RoutineStart";
import RoutineModal from "./Modals/RoutineModal";

export default function RoutineShow({ routine }) {
  const [isActive, setIsActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <RoutineModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        routine={routine}
      />
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="dumbbell" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{routine?.name}</Text>
            <Text style={styles.type}>{routine?.description}</Text>
          </View>
          <AntDesign
            name="arrowright"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        {/* {isActive ? (
          <View style={{ display: "flex", flexDirection: "column" }}>
            <RoutineStart routine={routine} />
          </View>
        ) : null} */}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
});
