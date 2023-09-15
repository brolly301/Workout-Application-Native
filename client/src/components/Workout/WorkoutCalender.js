import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import HistoryModal from "../History/HistoryModal";

export default function WorkoutCalender() {
  const formatDate = (date) => {
    newDate = new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });
    return newDate;
  };

  let newDate = new Date().toISOString().slice(0, 10);

  const [selected, setSelected] = useState(newDate);
  const [modalVisible, setModalVisible] = useState(false);

  const { state, deleteWorkout } = useWorkoutContext();

  const newState = Array.isArray(state)
    ? state.filter(
        (workout) => formatDate(workout.date) === formatDate(selected)
      )
    : [];

  return (
    <>
      <HistoryModal
        routine={newState[0]}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleDeleteWorkout={deleteWorkout}
      />
      <View>
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: "gray",
          }}
          onDayPress={(day) => {
            setModalVisible(!modalVisible);
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              marked: true,
              selected: true,
              dotColor: "#D5A8F8",
              selectedColor: "#D5A8F8",
            },
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
