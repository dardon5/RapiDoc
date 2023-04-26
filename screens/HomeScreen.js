import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen.js";
import WellnessScreen from "../screens/WellnessScreen.js";
import SymptomsScreen from "../screens/SymptomsScreen.js";
import AppointmentsScreen from "../screens/AppointmentsScreen.js";
import SearchResults from "../screens/SearchResults.js";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "SearchScreen") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "WellnessScreen") {
            iconName = focused ? "ios-pulse" : "ios-pulse-outline";
          } else if (route.name === "SymptomsScreen") {
            iconName = focused ? "ios-warning" : "ios-warning-outline";
          } else if (route.name === "AppointmentsScreen") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="WellnessScreen"
        component={WellnessScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="SymptomsScreen" component={SymptomsScreen} />
      <Tab.Screen name="AppointmentsScreen" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderTopColor: "gray",
  },
});

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
