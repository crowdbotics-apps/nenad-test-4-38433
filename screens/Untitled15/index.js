import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SocialLoginScreen = () => {
  return <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Sign in with</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/google.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/facebook.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/apple.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Apple</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default SocialLoginScreen;