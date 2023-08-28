import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import { AuthStack } from "./StackNavigation";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

const Stack = createStackNavigator();

const MainNavigation = () => {
  const { state } = useUserContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {true ? (
          <Stack.Screen name="Tabs" component={TabNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
