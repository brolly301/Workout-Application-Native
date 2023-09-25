import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import TrackModal from "./TrackModal";

const TrackShow = ({ item }) => {
  // Function to calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c; // Distance in kilometers

    return distance;
  };

  // Function to convert degrees to radians
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // Extract locations from the item's locations property
  const locations = item.locations || [];

  // Calculate total distance for all coordinates
  let totalDistance = 0;
  for (let i = 0; i < locations.length - 1; i++) {
    const { coords: coords1 } = locations[i];
    const { coords: coords2 } = locations[i + 1];

    const lat1 = coords1.latitude;
    const lon1 = coords1.longitude;
    const lat2 = coords2.latitude;
    const lon2 = coords2.longitude;

    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    totalDistance += distance;
  }

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TrackModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcons
            name="directions-run"
            style={styles.icon}
            size={34}
            color="black"
          />
          <View style={styles.subContainer}>
            <View style={styles.textContainer2}>
              <Text style={styles.text}>{item.name}</Text>

              <Text style={styles.text}></Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}></Text>
              <Text style={styles.text}>Exercises</Text>
            </View>
            <Text> {totalDistance.toFixed(2)} km</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TrackShow;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    paddingVertical: 20,

    borderRadius: 5,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginLeft: 20,
  },
  textContainer2: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
  },
  icon: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  setHeaderText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  exerciseName: {
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    marginVertical: 3,
  },
});
