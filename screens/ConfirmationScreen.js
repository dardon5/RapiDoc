import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const data = params;

  const date = new Date(data.date);
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedString = `${dateString} at ${timeString}`;
  console.log(formattedString);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You're appointment is confirmed!</Text>
      <View style={styles.card}>
        <View style={styles.profilePictureContainer}>
          <FontAwesome name="user-circle-o" size={100} color="#ccc" />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.name}>
            <Text style={styles.detailHeader}>Doctor: </Text>
            {data.doctor.firstName} {data.doctor.lastName}
          </Text>
          <Text style={styles.specialties}>
            <Text style={styles.detailHeader}>Specialty: </Text>
            {data.doctor.specialties.join(", ")}
          </Text>
          <Text style={styles.location}>
            <Text style={styles.detailHeader}>Location: </Text>
            {data.doctor.location}
          </Text>
          <Text style={styles.price}>
            <Text style={styles.detailHeader}>Price: </Text>${data.doctor.price}
          </Text>
          <Text style={styles.price}>
            <Text style={styles.detailHeader}>Time: </Text>
            {formattedString}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContianer}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text style={styles.buttonText}>Check my appointments</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    backgroundColor: "#f4f4f4",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: "90%",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 6 },
  },
  profilePictureContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  informationContainer: {
    paddingTop: 30,
    alignItems: "center",
  },
  detailHeader: {
    fontWeight: "bold",
    fontSize: 17,
  },
  name: {
    marginBottom: 20,
    fontSize: 17,
  },
  specialties: {
    marginBottom: 20,
    fontSize: 17,
  },
  location: {
    marginBottom: 10,
    fontSize: 17,
  },
  price: {
    fontSize: 17,
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
