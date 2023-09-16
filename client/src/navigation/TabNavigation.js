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
    <Tab.Navigator>
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
              style={focused ? styles.icon : {}}
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
              style={focused ? styles.icon : {}}
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
            <View style={styles.workoutTab}>
              <Feather
                name="plus"
                size={30}
                color={"black"}
                style={focused ? styles.icon : {}}
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
              style={focused ? styles.icon : {}}
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
              style={focused ? styles.icon : {}}
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
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    top: -10,
  },
  icon: {
    transform: [{ scale: 1.2 }],
  },
  tabBar: {
    backgroundColor: "white", // Background color of the tab bar
    borderTopWidth: 1, // Optional: You can add a border at the top
    borderTopColor: "#D5A8F8", // Border color
    elevation: 10, // Add elevation for the pop-out effect
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5, // Adjust padding as needed
  },
});
