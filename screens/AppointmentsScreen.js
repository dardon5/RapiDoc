import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AppointmentsScreen = () => {
  const navigation = useNavigation();
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/user");
        const data = await response.json();
        if (data.success) {
          const userId = data.userId;
          console.log(userId);
          const appointmentsResponse = await axios.get(
            `http://localhost:9000/api/appointment/${userId}`
          );
          const { upcomingAppointments, pastAppointments } =
            appointmentsResponse.data;
          setUpcomingAppointments(upcomingAppointments);
          console.log(upcomingAppointments);
          setPastAppointments(pastAppointments);
          console.log(pastAppointments);
        } else {
          console.log("no user id for you");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <Text style={styles.heading}>Your current appointments:</Text>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((appointment) => (
            <View style={styles.appointmentContainer} key={appointment._id}>
              <Text style={styles.doctorName}>{appointment.doctor.name}</Text>
              <Text style={styles.date}>{appointment.date}</Text>
            </View>
          ))
        ) : (
          <Text>No upcoming appointments</Text>
        )}
        <Text style={styles.heading}>Your past appointments:</Text>
        {pastAppointments.length > 0 ? (
          pastAppointments.map((appointment) => (
            <View style={styles.appointmentContainer} key={appointment._id}>
              <Text style={styles.doctorName}>{appointment.doctor.name}</Text>
              <Text style={styles.date}>{appointment.date}</Text>
            </View>
          ))
        ) : (
          <Text>No past appointments</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default AppointmentsScreen;

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
  appointmentContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    fontSize: 14,
  },
});
