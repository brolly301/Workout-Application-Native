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
import SplashScreen from "../screens/Auth/SplashScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import {
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";
import CreateTrackScreen from "../screens/CreateTrackScreen";
import ExerciseCreate from "../components/Exercises/ExerciseCreate";
import CreateRoutineScreen from "../screens/CreateRoutineScreen";
import ExerciseSortBy from "../components/Exercises/ExerciseSortBy";

const Stack = createStackNavigator();

const WorkoutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workout" component={WorkoutDashboard} />
      <Stack.Screen
        name="CreateWorkout"
        component={CreateWorkoutScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={styles.resetButton}>Reset</Text>,
          headerRight: () => <Text style={styles.finishButton}>Finish</Text>,
        }}
      />
      <Stack.Screen name="CreateTrack" component={CreateTrackScreen} />
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
            <EvilIcons
              style={styles.headerRight}
              name="calendar"
              size={30}
              color="#D5A8F8"
            />
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
              <Text style={styles.headerRightText}>Edit</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateRoutine")}>
                <Feather name="plus" size={24} color="#D5A8F8" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name="CreateRoutine" component={CreateRoutineScreen} />
    </Stack.Navigator>
  );
};
const ExercisesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exercises"
        component={ExerciseScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.headerRight}>
              <ExerciseSortBy />
              <GestureHandlerRootView>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ExerciseCreate")}>
                  <Feather name="plus" size={24} color="#D5A8F8" />
                </TouchableOpacity>
              </GestureHandlerRootView>
            </View>
          ),
        })}
      />
      <Stack.Screen name="ExerciseShow" component={ExerciseShowScreen} />
      <Stack.Screen
        name="ExerciseCreate"
        component={ExerciseCreate}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Exercises")}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          ),
        }}
      />
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
            <Ionicons
              style={styles.headerRight}
              name="settings-sharp"
              size={24}
              color="#D5A8F8"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
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

const styles = StyleSheet.create({
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
  },
  headerRightText: {
    marginRight: 10,
    alignSelf: "center",
    fontSize: 18,
  },
  cancelButton: {
    color: "red",
    fontSize: 18,
    marginLeft: 20,
  },
  resetButton: {
    color: "#D5A8F8",
    fontSize: 18,
  },
  finishButton: {
    color: "lightgreen",
    fontSize: 18,
    marginRight: 20,
  },
});
