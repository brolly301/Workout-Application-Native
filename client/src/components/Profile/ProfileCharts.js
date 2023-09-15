import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
      <Text style={styles.title}>Top Exercises</Text>
      <View>
        <View style={styles.chartContainer}>
          <VictoryChart
            style={styles.chart}
            width={screenWidth - 40}
            height={200}>
            <VictoryAxis
              label="Exercises"
              style={{
                axisLabel: { padding: 15, fontSize: 16 },
              }}
              tickFormat={(tick) => (tick === "Exercises" ? "Exercises" : "")}
            />

            <VictoryAxis dependentAxis tickValues={[]} />

            <VictoryBar
              barWidth={30}
              data={dataForVictoryBar.slice(0, 4)}
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
    marginTop: 15,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
