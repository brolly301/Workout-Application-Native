import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HistoryList from "../components/History/HistoryList";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {/* <ProfileDetails /> */}
      <Text style={styles.subTitle}>Activity</Text>
      {/* Chart component */}
      <Text style={styles.subTitle}>Recent Workouts</Text>
      {/* <HistoryList /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 28,
    fontWeight: "500",
  },
});
