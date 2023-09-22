import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { ContributionGraph } from "react-native-chart-kit";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import HistoryModal from "../History/HistoryModal";

const ProfileCharts = () => {
  const { state } = useWorkoutContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [calenderDate, setCalenderDate] = useState("2017-01-01");
  const { state: routine, deleteWorkout } = useWorkoutContext();

  const dates = state.map((workout) => {
    return new Date(workout.date).toISOString().slice(0, 10);
  });

  // Create a custom color function to set light grey for days with no workouts and black for days with workouts
  const colorFunction = (count) => {
    return count > 0 ? "black" : "lightgrey";
  };

  // Convert the grouped data into an array of objects with customized colors
  const commitsData = dates.map((date) => ({
    date,
    count: 1,
    color: colorFunction(1), // Use the custom color function
  }));

  const selectedDate = new Date(calenderDate).toISOString().slice(0, 10);

  const formatDate = (date) => {
    newDate = new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });
    return newDate;
  };

  const newState = Array.isArray(routine)
    ? routine.filter(
        (workout) => formatDate(workout.date) === formatDate(calenderDate)
      )
    : [];

  return (
    <>
      <HistoryModal
        setModalVisible={setModalVisible}
        calenderDate={selectedDate}
        routine={newState[0]}
        handleDeleteWorkout={deleteWorkout}
        modalVisible={modalVisible}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Monthly Workouts</Text>
        <View style={styles.hr} />
        {!state.length ? (
          <View>
            <View style={styles.chartContainer}>
              <Text
                style={{
                  textAlign: "center",
                  marginVertical: 15,
                  marginHorizontal: 30,
                }}>
                Sorry, there is no workout data available. To view the chart,
                please begin a new workout
              </Text>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.chart}>
              <View style={styles.chartContainer}>
                <ContributionGraph
                  values={commitsData}
                  endDate={new Date(Date.now())}
                  numDays={91}
                  width={screenWidth - 50}
                  height={220}
                  chartConfig={{
                    backgroundGradientFrom: "#D5A8F8",
                    backgroundGradientTo: "#D5A8F8",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `black`,
                  }}
                  squareSize={20}
                  gutterSize={2}
                  onDayPress={(day) => {
                    setCalenderDate(day.date);
                    setModalVisible(true);
                  }}
                  style={{
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default ProfileCharts;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.5)",
    borderRadius: 5,
  },
  hr: {
    width: "80%",
    alignSelf: "center",
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0, 0.5)",
  },
  title: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  chartContainer: {
    marginBottom: 10,
    justifyContent: "center", // Center its children horizontally
    alignItems: "center",
  },
  chart: {
    justifyContent: "center", // Center the chart horizontally
    alignItems: "center",
  },
});
