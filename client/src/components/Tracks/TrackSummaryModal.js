import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import MapView, { Polyline } from "react-native-maps";
import { formatDate } from "../DateTime";
import Star from "../../images/star.png";

const TrackSummaryModal = ({ modalVisible, setModalVisible, item }) => {
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
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <EvilIcons
                  style={styles.modalIconClose}
                  name='close'
                  size={32}
                  color='black'
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.workoutSummaryTitle}>Run Summary</Text>
              <View style={styles.starContainer}>
                <Image source={Star} style={styles.stars} />
                <Image source={Star} style={styles.stars} />
                <Image source={Star} style={styles.stars} />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item?.name}</Text>
              <Text style={styles.subTitle}>{formatDate(item?.date)}</Text>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  ...item?.locations[0].coords,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Polyline
                  coordinates={item?.locations?.map(
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

export default TrackSummaryModal;

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
    height: "74%",
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
  map: {
    height: 300,
  },
  mapContainer: {
    borderColor: "black",
    borderWidth: 1,
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
  workoutSummaryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
