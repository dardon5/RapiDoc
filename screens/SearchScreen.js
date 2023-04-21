import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const SearchScreen = () => {
  const [specialty, setSpecialty] = useState("");
  const [showSpecialtiesPicker, setShowSpecialtiesPicker] = useState(false);
  const [price, setPrice] = useState("");
  const [showPricePicker, setShowPricePicker] = useState(false);
  const [insurance, setInsurance] = useState("");
  const [showInsurancePicker, setShowInsurancePicker] = useState(false);
  const [location, setLocation] = useState("");
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const togglePricePicker = () => {
    setShowPricePicker(!showPricePicker);
  };
  const toggleSpecialtiesPicker = () => {
    setShowSpecialtiesPicker(!showSpecialtiesPicker);
  };
  const toggleInsurancePicker = () => {
    setShowInsurancePicker(!showInsurancePicker);
  };
  const toggleLocationPicker = () => {
    setShowLocationPicker(!showLocationPicker);
  };

  const handlePriceChange = (itemValue, itemIndex) => {
    setPrice(itemValue);
    setShowPricePicker(false);
  };
  const handleSpecialtyChange = (itemValue, itemIndex) => {
    setSpecialty(itemValue);
    setShowSpecialtiesPicker(false);
  };
  const handleInsuranceChange = (itemValue, itemIndex) => {
    setInsurance(itemValue);
    setShowInsurancePicker(false);
  };
  const handleLocationChange = (itemValue, itemIndex) => {
    setLocation(itemValue);
    setShowLocationPicker(false);
  };

  const specialtyOptions = [
    "Any",
    "General Practicioner",
    "Cardiology",
    "Dermatology",
    "Gastroenterology",
  ];

  const priceOptions = ["$20", "$25", "$30", "$35", "$40", "$45", "$50"];

  const insuranceOptions = ["Asesuisa", "MAPFRE", "AIG", "None"];

  const locationOptions = [
    "Colonia Escalon",
    "Santa Elena",
    "San Salvador",
    "La Libertad",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Find the best medical professional for you today!
      </Text>

      <View style={styles.inputContainer}>
        {/* Specialty input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Specialty</Text>
          <TouchableOpacity onPress={toggleSpecialtiesPicker}>
            <Text style={styles.input}>
              {specialty ? specialty : "Select Specialty"}
            </Text>
          </TouchableOpacity>
          {showSpecialtiesPicker && (
            <Picker
              selectedValue={specialty}
              onValueChange={handleSpecialtyChange}
            >
              <Picker.Item label="Select Specialty" value="" />
              {specialtyOptions.map((specialty, index) => (
                <Picker.Item key={index} label={specialty} value={specialty} />
              ))}
            </Picker>
          )}
        </View>

        {/* Price input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Price</Text>
          <TouchableOpacity onPress={togglePricePicker}>
            <Text style={styles.input}>{price ? price : "Select Price"}</Text>
          </TouchableOpacity>
          {showPricePicker && (
            <Picker selectedValue={price} onValueChange={handlePriceChange}>
              <Picker.Item label="Select Price" value="" />
              {priceOptions.map((price, index) => (
                <Picker.Item key={index} label={price} value={price} />
              ))}
            </Picker>
          )}
        </View>

        {/* Insurance input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Insurance</Text>
          <TouchableOpacity onPress={toggleInsurancePicker}>
            <Text style={styles.input}>
              {insurance ? insurance : "Select Insurance"}
            </Text>
          </TouchableOpacity>
          {showInsurancePicker && (
            <Picker
              selectedValue={insurance}
              onValueChange={handleInsuranceChange}
            >
              <Picker.Item label="Select Insurance" value="" />
              {insuranceOptions.map((insurance, index) => (
                <Picker.Item key={index} label={insurance} value={insurance} />
              ))}
            </Picker>
          )}
        </View>

        {/* Location input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Location</Text>
          <TouchableOpacity onPress={toggleLocationPicker}>
            <Text style={styles.input}>
              {location ? location : "Select Location"}
            </Text>
          </TouchableOpacity>
          {showLocationPicker && (
            <Picker
              selectedValue={location}
              onValueChange={handleLocationChange}
            >
              <Picker.Item label="Select Location" value="" />
              {locationOptions.map((location, index) => (
                <Picker.Item key={index} label={location} value={location} />
              ))}
            </Picker>
          )}
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

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
    marginBottom: 20,
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
});
