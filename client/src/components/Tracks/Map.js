import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import useLocationContext from "../../hooks/useLocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useLocationContext();

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {/* region=
        {{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }} */}
        <Polyline coordinates={locations.map((location) => location.coords)} />
        <Circle
          center={currentLocation.coords}
          radius={15}
          strokeColor="rgba(185, 185, 255, 1.0)"
          fillColor="rgba(138,158, 255, 0.3)"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  mapContainer: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
  },
});
