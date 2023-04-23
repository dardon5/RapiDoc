import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:9000/api/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        navigation.navigate("HomeScreen");
        console.log("Login successful!");
        // Handle successful login, such as navigating to a different screen
      } else {
        console.log(`Login failed: ${data.message}`);
        // Handle login error, such as displaying an error message
      }
    } catch (error) {
      console.error(`Login error: ${error}`);
      // Handle login error, such as displaying an error message
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "http://localhost:9000/api/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful!");
        setIsLoginForm(true); // Toggle to login form
      } else {
        console.log(`Registration failed: ${data.message}`);
        // Handle registration error, such as displaying an error message
      }
    } catch (error) {
      console.error(`Registration error: ${error}`);
      // Handle registration error, such as displaying an error message
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  if (!isLoginForm) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter your information!</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <View style={styles.profilePictureContainer}>
              <FontAwesome name="user-circle-o" size={100} color="#ccc" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="First name"
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              value={firstName}
              onChangeText={setLastName}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleForm}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign in or create an account to find your doctor today!
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <View style={styles.profilePictureContainer}>
            <FontAwesome firstName="user-circle-o" size={100} color="#ccc" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={toggleForm}>
            <Text style={styles.buttonText}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9FBAFF",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 70,
  },
  inputContainer: {
    backgroundColor: "#FBF9F9",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 6 },
    width: "90%",
  },
  inputBox: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    alignItems: "center",
  },
  profilePictureContainer: {
    marginBottom: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#FFDDDD",
    borderRadius: 5,
    padding: 12,
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
