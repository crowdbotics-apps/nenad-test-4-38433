import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Image source={require('../assets/placeholder-image.jpg')} style={styles.image} />
    </View>;
};

const ProfileScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Image source={require('../assets/placeholder-image.jpg')} style={styles.image} />
    </View>;
};

const Tab = createBottomTabNavigator();

const App = () => {
  return <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
export default App;