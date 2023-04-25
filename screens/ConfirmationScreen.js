import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You're appointment is confirmed!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9FBAFF",
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  heading: {
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
    marginBottom: 50,
    backgroundColor: "#FBF9F9",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 6 },
  },
  inputBox: {
    marginBottom: 10,
    padding: 20,
    width: "100%",
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  searchContainer: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  searchButton: {
    backgroundColor: "#FFDDDD",
    padding: 12,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 6 },
  },
  searchButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorMessageContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
  },
});

export default ConfirmationScreen;
