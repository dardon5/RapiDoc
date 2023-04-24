import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const SearchResults = () => {
  const { params } = useRoute();
  const { doctors } = params;

  return (
    // <View>
    //   {console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
    //   {console.log(doctors.data)}
    //   {console.log(doctors.data[0].firstName)}
    // </View>
    <View style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
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
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
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
});

export default SearchResults;
