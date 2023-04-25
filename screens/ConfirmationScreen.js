import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from "@react-navigation/native";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const data = params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You're appointment is confirmed!</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
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
  buttonContianer: {
    borderRadius: 12,
    backgroundColor: "#FFDDDD",
    marginTop: 20,
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 6 },
  },
  buttonText: {
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default ConfirmationScreen;
