import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import useExerciseSetsContext from "../../hooks/useExerciseSetsContext";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from "victory-native";

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

  const dataForVictoryBar = Object.keys(topExercisesCount).map((exercise) => ({
    x: exercise,
    y: topExercisesCount[exercise],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <VictoryChart
          style={styles.chart}
          width={screenWidth - 40}
          height={200}>
          <Text style={styles.title}>Most Used Exercises</Text>
          <VictoryAxis
            label="Exercises" // Set the label to "Exercises"
            style={{
              axisLabel: { padding: 15, fontSize: 16 }, // Adjust label position if needed
            }}
            tickFormat={(tick) => (tick === "Exercises" ? "Exercises" : "")} // Customize tick format
          />
          {/* y-axis labels */}
          <VictoryAxis dependentAxis tickValues={[]} />

          <VictoryBar
            barWidth={30}
            data={dataForVictoryBar}
            theme={VictoryTheme.material}
            labels={({ datum }) => datum.x}
            labelComponent={<VictoryLabel dx={15} />}
            style={{
              data: { fill: "rgb(213, 168, 248)", marginTop: 10 },
            }}
            alignment="start"
          />
        </VictoryChart>
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
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  chartContainer: {
    marginTop: 20, // Add padding/margin to the top of the chart
  },
});
