import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WorkoutDashboard from "../screens/WorkoutDashboardScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../screens/HistoryScreen";
import RoutineScreen from "../screens/RoutineScreen";
import ExerciseScreen from "../screens/ExerciseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExerciseShowScreen from "../screens/ExerciseShowScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

import {
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

const WorkoutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workout" component={WorkoutDashboard} />
    </Stack.Navigator>
  );
};
const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerRight: () => (
            <EvilIcons name="calendar" size={24} color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const RoutinesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Routines"
        component={RoutineScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.headerRight}>
              <Text>Edit</Text>
              <Feather name="plus" size={24} color="black" />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const ExercisesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exercises"
        component={ExerciseScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.headerRight}>
              <Text>Sort By</Text>
              <GestureHandlerRootView>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ExerciseCreate")}>
                  <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>
              </GestureHandlerRootView>
            </View>
          ),
        })}
      />
      <Stack.Screen name="ExerciseShow" component={ExerciseShowScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <Ionicons name="settings-sharp" size={24} color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  WorkoutStack,
  HistoryStack,
  RoutinesStack,
  ExercisesStack,
  ProfileStack,
};

const styles = StyleSheet.create({
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
});
