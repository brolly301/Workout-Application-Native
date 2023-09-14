import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WorkoutDashboard from "../screens/WorkoutDashboardScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../screens/HistoryScreen";
import RoutineScreen from "../screens/RoutineScreen";
import ExerciseScreen from "../screens/ExerciseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExerciseShowScreen from "../screens/ExerciseShowScreen";
import React from "react";
import SplashScreen from "../screens/Auth/SplashScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";
import CreateTrackScreen from "../screens/CreateTrackScreen";
import CreateRoutineScreen from "../screens/CreateRoutineScreen";
import EditExerciseScreen from "../screens/EditExerciseScreen";
import EditRoutineScreen from "../screens/EditRoutineScreen";
import EditWorkoutScreen from "../screens/EditWorkoutScreen";
import CreateExerciseScreen from "../screens/CreateExerciseScreen";

const Stack = createStackNavigator();

const WorkoutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Workout" component={WorkoutDashboard} />
      <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
      <Stack.Screen name="CreateTrack" component={CreateTrackScreen} />
    </Stack.Navigator>
  );
};
const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="EditWorkout" component={EditWorkoutScreen} />
    </Stack.Navigator>
  );
};
const RoutinesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Routines" component={RoutineScreen} />
      <Stack.Screen name="CreateRoutine" component={CreateRoutineScreen} />
      <Stack.Screen name="RoutineWorkout" component={WorkoutStack} />
      <Stack.Screen name="EditRoutine" component={EditRoutineScreen} />
    </Stack.Navigator>
  );
};
const ExercisesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Exercises" component={ExerciseScreen} />
      <Stack.Screen name="ExerciseShow" component={ExerciseShowScreen} />
      <Stack.Screen name="ExerciseEdit" component={EditExerciseScreen} />
      <Stack.Screen name="ExerciseCreate" component={CreateExerciseScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export {
  WorkoutStack,
  HistoryStack,
  RoutinesStack,
  ExercisesStack,
  ProfileStack,
  AuthStack,
};
