import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderPanel from "../../components/HeaderPanel";
import MapView, { Polyline } from "react-native-maps";
import useTrackContext from "../../hooks/useTrackContext";
import SaveEditModal from "../../components/SaveEditModal";
import validation from "../../components/Tracks/TrackValidation";

const EditTrackScreen = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { item } = route.params;
  const { editTrack } = useTrackContext();

  const [errors, setErrors] = useState({});
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleValidation = () => {
    setErrors(validation(name));
  };

  const trackData = {
    ...item,
    id: item._id,
    name,
    description,
  };

  const handleSubmit = () => {
    editTrack(trackData, () => {
      navigation.navigate("History");
    });
  };

  return (
    <HeaderPanel>
      <SaveEditModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        saveText={"Track"}
        handleSubmit={handleSubmit}
        handleValidation={handleValidation}
      />
      <View style={styles.headerIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
        >
          <Ionicons name='arrow-back' size={32} color='black' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.finishButton}>Save</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Tracks</Text>
        <Text style={styles.subTitle}>Edit Track</Text>
        {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
        <TextInput
          placeholder='Name'
          style={styles.nameInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder='Description'
          style={styles.descriptionInput}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            ...item.locations[0].coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline
            coordinates={item.locations.map((location) => location.coords)}
          />
        </MapView>
      </View>
    </HeaderPanel>
  );
};

export default EditTrackScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
  },
  fieldText: {
    fontSize: 18,
    marginVertical: 2,
  },
  button: {
    width: "100%",
    backgroundColor: "#D5A8F8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: "auto",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  nameInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 35,
    marginBottom: 10,
    paddingVertical: 7,
    paddingLeft: 7,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    height: 50,
    paddingVertical: 7,
    paddingLeft: 7,
    paddingBottom: 25,
  },
  finishButton: {
    color: "#5bc255",
    fontSize: 18,
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errors: {
    color: "red",
    marginBottom: 10,
  },
  exerciseErrors: {
    color: "red",
    marginTop: 10,
  },
  map: {
    height: 300,
  },
  mapContainer: {
    marginTop: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  errors: {
    color: "red",
    marginBottom: 10,
  },
});
