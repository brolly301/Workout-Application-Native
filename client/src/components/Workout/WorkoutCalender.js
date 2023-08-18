import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function WorkoutCalender() {
  const [selected, setSelected] = useState("");

  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
