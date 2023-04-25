import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const SearchResults = () => {
  const { params } = useRoute();
  const { doctors } = params;
  const navigation = useNavigation();

  const handleAppointment = (doctor) => {
    navigation.navigate("BookAppointment", { doctor });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButtonContainer}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Book your appointment today!</Text>
          </View>
        </View>
        {doctors.data.map((doctor) => (
          <View style={styles.card} key={doctor._id}>
            <Text style={styles.name}>
              {doctor.firstName} {doctor.lastName}
            </Text>
            <Text style={styles.specialties}>
              {doctor.specialties.join(", ")}
            </Text>
            <Text style={styles.location}>{doctor.location}</Text>
            <Text style={styles.price}>${doctor.price}</Text>
            <TouchableOpacity
              style={styles.buttonContianer}
              onPress={() => {
                handleAppointment(doctor);
              }}
            >
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#9FBAFF",
    alignItems: "center",
    paddingBottom: 70,
  },
  header: {
    paddingTop: 50,
  },
  backButtonContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: "8%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
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
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  specialties: {
    marginBottom: 10,
  },
  location: {
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
  },
  buttonContianer: {
    borderRadius: 3,
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
  },
});

export default SearchResults;
