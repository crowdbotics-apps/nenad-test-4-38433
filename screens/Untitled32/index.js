import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const GoogleMapsScreen = () => {
  return <View style={styles.container}>
      <Image source={require("./BA team scoping.png")} style={styles.mapImage} />
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Current Location</Text>
        <Text style={styles.addressText}>1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</Text>
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
  mapImage: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  addressContainer: {
    paddingHorizontal: 20
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  addressText: {
    fontSize: 18,
    color: '#666'
  }
});
export default GoogleMapsScreen;