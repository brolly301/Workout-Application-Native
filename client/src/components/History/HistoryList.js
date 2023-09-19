import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import HistoryModal from "./HistoryModal";
import NoResultsPlaceholder from "../NoResultsPlaceholder";
import HistoryShow from "./HistoryShow";

export default function HistoryList({ limit, state, handleDeleteWorkout }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [routine, setRoutine] = useState(null);

  return (
    <View style={styles.mainContainer}>
      <HistoryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        routine={routine}
        handleDeleteWorkout={handleDeleteWorkout}
      />
      {state?.length < 1 ? (
        <NoResultsPlaceholder
          redirect={"Workout"}
          buttonText={"New Workout"}
          message={"You have currently not created any workouts."}
          secondMessage={
            "Please use the button below to begin a new workout. Your history will then appear here."
          }
        />
      ) : (
        <>
          {Array.isArray(state)
            ? state.slice(0, limit).map((item) => {
                return (
                  <HistoryShow
                    setRoutine={setRoutine}
                    setModalVisible={setModalVisible}
                    modalVisible={modalVisible}
                    item={item}
                    key={item.workoutID}
                  />
                );
              })
            : []}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flex: 1,
    borderRadius: 5,
  },
});
