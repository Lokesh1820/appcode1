import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './Camera';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ProfileScreen from './profile';

const Stack = createStackNavigator();

import { useNavigation } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home', 
            headerRight: () => <LoginButton />,
          }}
        />
        <Stack.Screen name="Camera" component={CameraScreen} options={{title: 'Camera',}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login',}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const LoginButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro} backgroundColor="#fff">
        <Text>Welcome to Skincare+ 
          Your Personalized Skincare Companion! Discover the secrets to radiant and healthy skin right at your fingertips.</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff8dc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 15,
  },
  loginButtonText: {
    color: '#fff',
  },
});
