import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FilterModal from "./Modals/FilterModal";
import SortByModal from "./Modals/SortByModal";
import ExerciseList from "./ExerciseList";

const ExerciseSortByFilter = ({ sortByState, setSelected }) => {
  const [sortByModalVisible, setSortByModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <SortByModal
          setModalVisible={setSortByModalVisible}
          modalVisible={sortByModalVisible}
          setSelected={setSelected}
        />
        <FilterModal
          setModalVisible={setFilterModalVisible}
          modalVisible={filterModalVisible}
          setSelected={setSelected}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSortByModalVisible(!sortByModalVisible)}>
          <Text style={styles.buttonText}>Sort By</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFilterModalVisible(!filterModalVisible)}>
          <Text style={styles.buttonText}>All Muscles</Text>
        </TouchableOpacity>
      </View>
      <ExerciseList state={sortByState} />
    </View>
  );
};

export default ExerciseSortByFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#D5A8F8",
    borderRadius: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    width: "47%",
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
