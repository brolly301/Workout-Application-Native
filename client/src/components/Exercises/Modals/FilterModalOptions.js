import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const FilterModalOptions = ({
  name,
  setSelected,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSelected(name.toLowerCase());
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.exerciseName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterModalOptions;

const styles = StyleSheet.create({
  exerciseName: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
