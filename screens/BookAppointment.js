import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const BookAppointment = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const data = params;
  const doctor = data.doctor;
  const minDate = new Date();

  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleAppointment = () => {};

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
            <Text style={styles.title}>
              Enter your information to schedule your appointment!
            </Text>
          </View>
        </View>
        <View style={styles.card} key={doctor._id}>
          <View style={styles.profilePictureContainer}>
            <FontAwesome name="user-circle-o" size={100} color="#ccc" />
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.name}>
              <Text style={styles.detailHeader}>Doctor: </Text>
              {doctor.firstName} {doctor.lastName}
            </Text>
            <Text style={styles.specialties}>
              <Text style={styles.detailHeader}>Specialty: </Text>
              {doctor.specialties.join(", ")}
            </Text>
            <Text style={styles.location}>
              <Text style={styles.detailHeader}>Location: </Text>
              {doctor.location}
            </Text>
            <Text style={styles.price}>
              <Text style={styles.detailHeader}>Price: </Text>${doctor.price}
            </Text>
            <View style={styles.fieldsContainer}>
              <Text style={styles.fieldsText}>Select a date and time: </Text>
              <FontAwesome
                name="clock-o"
                size={80}
                color="#ccc"
                onPress={() => {
                  toggleDatePicker();
                }}
              />
              <DateTimePickerModal
                isVisible={showDatePicker}
                mode="datetime"
                onConfirm={handleDateChange}
                onCancel={toggleDatePicker}
                minimumDate={minDate}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContianer}
            onPress={() => {
              handleAppointment(doctor, date);
            }}
          >
            <Text style={styles.buttonText}>Confirm Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContianer}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 32,
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
    marginBottom: 20,
    fontSize: 17,
  },
  price: {
    marginBottom: 20,
    fontSize: 17,
  },
  fieldsContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  fieldsText: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 25,
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

export default BookAppointment;
