import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TutorialScreen = () => {
  return <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/tutorial-image.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to our App!</Text>
        <Text style={styles.subtitle}>
          This tutorial will guide you through the basics.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod nisi, vel bibendum sapien. Nulla facilisi. Sed euismod euismod
          nisi, vel bibendum sapien. Nulla facilisi.
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center'
  }
});
export default TutorialScreen;