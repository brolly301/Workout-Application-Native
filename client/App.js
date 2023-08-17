import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./src/navigation/TabNavigation";
import SplashScreen from "./src/screens/Auth/SplashScreen";
import LoginScreen from "./src/screens/Auth/LoginScreen";
import RegisterScreen from "./src/screens/Auth/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ExerciseCreate" component={ExerciseCreate} />
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Routines"
        component={RoutineScreen}
        options={({ navigation }) => ({
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
        })}
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
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.exerciseHeaderRight}>
              <Text>Sort By</Text>
              <GestureHandlerRootView>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ExerciseCreate")}>
                  <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>
              </GestureHandlerRootView>
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
        })}
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
  );
};

const styles = StyleSheet.create({
  exerciseHeaderRight: {
    display: "flex",
    flexDirection: "row",
  },
});
