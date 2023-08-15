import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkoutDashboardScreen from "./src/screens/WorkoutDashboardScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import RoutineScreen from "./src/screens/RoutineScreen";
import {
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Routines"
          component={RoutineScreen}
          options={{
            headerRight: () => (
              <View style={styles.exerciseHeaderRight}>
                <Text>Edit</Text>
                <Feather name="plus" size={24} color="black" />
              </View>
            ),
            tabBarLabel: () => <Text>Routines</Text>,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="clipboard-list"
                size={30}
                color={focused ? "#D5A8F8" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          plus
          options={{
            headerRight: () => (
              <EvilIcons name="calendar" size={24} color="black" />
            ),
            tabBarLabel: () => <Text>History</Text>,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="history"
                size={30}
                color={focused ? "#D5A8F8" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Workout"
          component={WorkoutDashboardScreen}
          options={{
            tabBarLabel: () => <Text>Workout</Text>,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="plus-square"
                size={30}
                color={focused ? "#D5A8F8" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Exercise"
          component={ExerciseScreen}
          options={{
            headerRight: () => (
              <View style={styles.exerciseHeaderRight}>
                <Text>Sort By</Text>
                <Feather name="plus" size={24} color="black" />
              </View>
            ),
            tabBarLabel: () => <Text>Exercises</Text>,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="weight-lifter"
                size={30}
                color={focused ? "#D5A8F8" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerRight: () => (
              <Ionicons name="settings-sharp" size={24} color="black" />
            ),
            tabBarLabel: () => <Text>Profile</Text>,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user"
                size={30}
                color={focused ? "#D5A8F8" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  exerciseHeaderRight: {
    display: "flex",
    flexDirection: "row",
  },
});
