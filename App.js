import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/BottomTabNavigator.js";

const App = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
