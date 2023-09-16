import { StyleSheet, Text, View } from "react-native";
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
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="WorkoutTab">
      <Tab.Screen
        name="RoutinesTab"
        component={RoutinesStack}
        options={() => ({
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="clipboard-list"
              size={30}
              color={focused ? "#D5A8F8" : "black"}
              style={focused ? styles.iconFocused : styles.icon}
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
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="history"
              size={33}
              color={focused ? "#D5A8F8" : "black"}
              style={focused ? styles.iconFocused : styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WorkoutTab"
        component={WorkoutStack}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.workoutTabFocused : styles.workoutTab}>
              <Feather
                name="plus"
                size={30}
                color={"black"}
                style={focused ? styles.workoutIconFocused : {}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ExerciseTab"
        component={ExercisesStack}
        options={() => ({
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={32}
              color={focused ? "#D5A8F8" : "black"}
              style={focused ? styles.iconFocused : styles.icon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user"
              size={28}
              color={focused ? "#D5A8F8" : "black"}
              style={focused ? styles.iconFocused : styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  workoutTab: {
    backgroundColor: "#D5A8F8",
    borderRadius: 50,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    top: -10,
  },
  workoutTabFocused: {
    backgroundColor: "#D5A8F8",
    borderRadius: 50,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    top: -10,
    transform: [{ scale: 1.1 }],
  },
  iconFocused: {
    transform: [{ scale: 1.2 }],
    marginBottom: 5,
  },
  workoutIconFocused: {
    transform: [{ scale: 1.1 }],
  },
  icon: {
    marginBottom: 5,
  },
});
