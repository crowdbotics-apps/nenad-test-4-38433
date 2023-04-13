import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PushNotificationScreen = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://dummyimage.com/300x300/000/fff'
    }} style={styles.image} />
      <Text style={styles.title}>New Notification</Text>
      <Text style={styles.message}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo vel massa malesuada, vel bibendum velit bibendum.
      </Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});
export default PushNotificationScreen;