import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HistoryList from "../components/History/HistoryList";
import ProfileCharts from "../components/Profile/ProfileCharts";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {/* <ProfileDetails /> */}
      <Text style={styles.subTitle}>Activity</Text>
      <ProfileCharts />
      <Text style={styles.subTitle}>Recent Workouts</Text>
      <View style={styles.recentWorkoutsContainer}>
        <HistoryList limit={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: "100%",
    display: "flex",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 28,
    fontWeight: "500",
  },
  recentWorkoutsContainer: {
    flex: 1,
  },
});
