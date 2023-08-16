import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HistoryList from "../components/History/HistoryList";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile</Text>
      <ProfileDetails />
      <Text>Activity</Text>
      //Chart component
      <Text>Recent Workouts</Text>
      <HistoryList />
    </View>
  );
}

const styles = StyleSheet.create({});
