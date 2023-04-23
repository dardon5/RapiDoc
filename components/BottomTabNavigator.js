import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen.js";
import HomeScreen from "../screens/HomeScreen.js";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
