import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import HistoryModal from "../History/HistoryModal";

export default function WorkoutCalender() {
  const [selected, setSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { state, deleteWorkout } = useWorkoutContext();

  const formatDate = (date) => {
    newDate = new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });
    return newDate;
  };

  const newState = state?.map((workout) => {
    if (formatDate(workout.date) === formatDate(selected)) {
      return workout;
    }
  });

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
          onDayPress={(day) => {
            setModalVisible(!modalVisible);
            setSelected(day.dateString);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
