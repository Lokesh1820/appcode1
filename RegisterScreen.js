import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your user registration logic here
    // This could include making an API request to a server
    // For simplicity, let's just navigate back to the login screen after registration
    navigation.navigate('Home');
  };

  const handleAlreadyHaveAccountClick = () => {
    // Navigate back to the LoginScreen when "Already have an account? Login" is clicked
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        onChangeText={(Number) => setUsername(Number)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.existingUser} onPress={handleAlreadyHaveAccountClick}>
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff8dc',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '90%',
  },
  registerButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 4,
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#fff',
  },
  existingUser: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    width: '90%',
    backgroundColor: '#90ee90',
  },
});

export default RegisterScreen;
