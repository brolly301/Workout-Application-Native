import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import useExerciseSetsContext from "../../hooks/useExerciseSetsContext";
import { PieChart } from "react-native-chart-kit";

const ProfileCharts = () => {
  const { state } = useExerciseSetsContext();

  const topExercises = state.map((exerciseSet) => {
    return exerciseSet.exerciseName;
  });

  const topExercisesCount = topExercises.reduce(
    (totalExercises, currentExercise) => {
      totalExercises[currentExercise]
        ? totalExercises[currentExercise]++
        : (totalExercises[currentExercise] = 1);
      return totalExercises;
    },
    {}
  );

  // Define an array of unique colors
  const colors = [
    "#6F00C4",
    "#A02AFA",
    "#B36DE9",
    "#CB9EEE",
    "#DFCEEC",
    // Add more colors as needed
  ];

  const exerciseColors = {};
  Object.keys(topExercisesCount).forEach((exercise, index) => {
    exerciseColors[exercise] = colors[index % colors.length];
  });

  const dataForChart = Object.keys(topExercisesCount).map((exercise) => ({
    name: exercise,
    exercisesComplete: topExercisesCount[exercise],
    color: exerciseColors[exercise],
    legendFontColor: "#434343",
    legendFontSize: 15,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Exercises</Text>
      <View style={styles.hr} />
      <View style={styles.chart}>
        <View style={styles.chartContainer}>
          <PieChart
            data={dataForChart.slice(0, 5)}
            width={screenWidth}
            height={200}
            accessor={"exercisesComplete"}
            backgroundColor={"transparent"}
            center={[35, 0]}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{
              borderRadius: 16,
              marginRight: 10,
            }}
          />
        </View>
      </View>
    </View>
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
    alignItems: "center", // Center its children vertically
  },
  chart: {
    justifyContent: "center", // Center the chart horizontally
    alignItems: "center",
    marginLeft: 0,
    marginRight: 40,
  },
});
