import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLogin = () => {
    // Handle login logic here
    console.log(`Logging in with email ${email} and password ${password}`);
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log(
      `Registering user with name ${name}, email ${email}, and password ${password}`
    );
    setIsLoginForm(true);
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
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
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
            <FontAwesome name="user-circle-o" size={100} color="#ccc" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
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
    width: "50%",
    backgroundColor: "#FBF9F9",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 6 },
  },
  inputBox: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    alignItems: "center",
    width: "100%",
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
    width: "50%",
  },
  button: {
    backgroundColor: "#FFDDDD",
    borderRadius: 5,
    padding: 12,
    width: "50%",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
