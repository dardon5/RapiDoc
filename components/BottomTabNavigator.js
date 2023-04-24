import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen.js";
import HomeScreen from "../screens/HomeScreen.js";
import SearchResults from "../screens/SearchResults.js";
import SearchScreen from "../screens/SearchScreen.js";
import AppointmentsScreen from "../screens/AppointmentsScreen.js";
import SymptomsScreen from "../screens/SymptomsScreen.js";
import WellnessScreen from "../screens/WellnessScreen.js";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen
          name="AppointmentsScreen"
          component={AppointmentsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SymptomsScreen"
          component={SymptomsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WellnessScreen"
          component={WellnessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return <HomeScreen />;
};

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="App"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderTopColor: "gray",
  },
});

const AppContainer = () => {
  return <MainStackNavigator />;
};

AppContainer.options = {
  headerShown: false,
};

export default AppContainer;
