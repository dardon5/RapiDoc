import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen.js";
import SearchScreen from "../screens/SearchScreen.js";
import WellnessScreen from "../screens/WellnessScreen.js";
import SymptomsScreen from "../screens/SymptomsScreen.js";
import AppointmentsScreen from "../screens/AppointmentsScreen.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Wellness") {
            iconName = focused ? "ios-pulse" : "ios-pulse-outline";
          } else if (route.name === "Symptoms") {
            iconName = focused ? "ios-warning" : "ios-warning-outline";
          } else if (route.name === "Appointments") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="WellnessScreen" component={WellnessScreen} />
      <Tab.Screen name="SymptomsScreen" component={SymptomsScreen} />
      <Tab.Screen name="AppointmentsScreen" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
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
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
