import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useExerciseContext from "../../hooks/useExerciseContext";
import useStateContext from "../../hooks/useStateContext";
import SortByModal from "./Modals/SortByModal";

const ExerciseSortBy = ({ selected, setSelected }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <SortByModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selected={selected}
        setSelected={setSelected}
      />
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.sortByText}>Sort By</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseSortBy;

const styles = StyleSheet.create({
  dropdownContainer: {
    position: "absolute",
    top: 35,
    borderColor: "black",
    borderWidth: 1,
  },
  sortByText: {
    fontSize: 20,
    marginRight: 15,
  },
  dropdownText: {
    fontSize: 20,
    marginVertical: 20,
  },
});
