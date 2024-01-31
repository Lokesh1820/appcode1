import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's just navigate back to the home screen for now
    navigation.goBack();
  };

  const handleNewUserClick = () => {
    // Navigate to the RegisterScreen when "New User?" is clicked
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.forgotpassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.newuser} onPress={handleNewUserClick}>
        <Text>New User?</Text>
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
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 4,
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
  },
  forgotpassword: {
    marginRight: 180,
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  newuser: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    width: '90%',
    backgroundColor: '#90ee90',
  },
});

export default LoginScreen;
