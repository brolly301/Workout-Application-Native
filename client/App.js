import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./src/navigation/TabNavigation";
import SplashScreen from "./src/screens/Auth/SplashScreen";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {signedIn ? (
          <Stack.Screen name="Tabs" component={TabNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={SplashScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
