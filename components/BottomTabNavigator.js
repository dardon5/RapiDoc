// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// import SearchScreen from "../screens/SearchScreen.js";
// import WellnessScreen from "../screens/WellnessScreen.js";
// import SymptomsScreen from "../screens/SymptomsScreen.js";
// import AppointmentsScreen from "../screens/AppointmentsScreen.js";
// import AccountScreen from "../screens/AccountScreen.js";

// const Tab = createBottomTabNavigator();

// console.log(SearchScreen);

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Search") {
//             iconName = focused ? "ios-search" : "ios-search-outline";
//           } else if (route.name === "Wellness") {
//             iconName = focused ? "ios-pulse" : "ios-pulse-outline";
//           } else if (route.name === "Symptoms") {
//             iconName = focused ? "ios-warning" : "ios-warning-outline";
//           } else if (route.name === "Appointments") {
//             iconName = focused ? "ios-calendar" : "ios-calendar-outline";
//           } else if (route.name === "Account") {
//             iconName = focused ? "ios-person" : "ios-person-outline";
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="Search" component={SearchScreen} />
//       <Tab.Screen name="Wellness" component={WellnessScreen} />
//       <Tab.Screen name="Symptoms" component={SymptomsScreen} />
//       <Tab.Screen name="Appointments" component={AppointmentsScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;

import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen.js";
import SearchScreen from "../screens/SearchScreen.js";
import WellnessScreen from "../screens/WellnessScreen.js";
import SymptomsScreen from "../screens/SymptomsScreen.js";
import AppointmentsScreen from "../screens/AppointmentsScreen.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen setIsLoggedIn={setIsLoggedIn} />;
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
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wellness" component={WellnessScreen} />
      <Tab.Screen name="Symptoms" component={SymptomsScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
