import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import HistoryList from "../components/History/HistoryList";
import ProfileCharts from "../components/Profile/ProfileCharts";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProfileSettings from "../components/Profile/ProfileSettings";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [activeSettings, setActiveSettings] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setActiveSettings(!activeSettings)}>
          <Ionicons
            style={styles.headerRight}
            name="settings-sharp"
            size={24}
            color="#D5A8F8"
          />
        </TouchableOpacity>
      ),
    });
  }, [activeSettings]);

  return (
    <View style={[styles.container]}>
      {activeSettings ? <ProfileSettings /> : null}
      <Text style={styles.title}>Profile</Text>
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
