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

const Stack = createStackNavigator();

const WorkoutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workout" component={WorkoutDashboard} />
      <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
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
      <Stack.Screen name="ExerciseCreate" component={ExerciseCreate} />
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
  },
});
