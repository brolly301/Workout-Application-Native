import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  WorkoutStack,
  ProfileStack,
  RoutinesStack,
  ExercisesStack,
  HistoryStack,
} from "./StackNavigation";
import {
  FontAwesome5,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RoutinesTab"
        component={RoutinesStack}
        options={() => ({
          headerShown: false,
          tabBarLabel: () => <Text>Routines</Text>,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="clipboard-list"
              size={30}
              color={focused ? "#D5A8F8" : "black"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryStack}
        plus
        options={{
          headerShown: false,
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
        name="WorkoutTab"
        component={WorkoutStack}
        options={{
          headerShown: false,
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
        name="ExerciseTab"
        component={ExercisesStack}
        options={() => ({
          headerShown: false,
          tabBarLabel: () => <Text>Exercises</Text>,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={30}
              color={focused ? "#D5A8F8" : "black"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          headerShown: false,
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
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
