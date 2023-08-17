import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import { AuthStack } from "./StackNavigation";
import { useState } from "react";

const Stack = createStackNavigator();

const MainNavigation = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {signedIn ? (
          <Stack.Screen name="Tabs" component={TabNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
