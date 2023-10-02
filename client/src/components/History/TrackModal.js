import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import MapView, { Polyline, Circle } from "react-native-maps";
import DeleteModal from "../DeleteModal";
import useTrackContext from "../../hooks/useTrackContext";

const TrackModal = ({ modalVisible, setModalVisible, item }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const { deleteTrack } = useTrackContext();

  return (
    <View>
      <DeleteModal
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        deleteText={"Run"}
        deleteFunction={deleteTrack}
        routine={item}
        id={item._id}
      />
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
                  setDeleteModalVisible(!deleteModalVisible);
                }}
              >
                <EvilIcons
                  style={styles.modalIconDelete}
                  name='trash'
                  size={39}
                  color='red'
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <EvilIcons
                  style={styles.modalIconClose}
                  name='pencil'
                  size={39}
                  color='#D5A8F8'
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
              <Text style={styles.title}>{item?.name}</Text>
            </View>
            <View>
              <MapView
                style={styles.map}
                initialRegion={{
                  ...item.locations[0].coords,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Polyline
                  coordinates={item.locations.map(
                    (location) => location.coords
                  )}
                />
              </MapView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TrackModal;

const styles = StyleSheet.create({
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
    height: "60%",
  },
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
  map: {
    height: 300,
  },
});
