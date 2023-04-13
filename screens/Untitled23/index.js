import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PushNotificationScreen = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("aboutTheApp");
  }}><View style={styles.container}>
      <Image source={{
        uri: 'https://dummyimage.com/300x300/000/fff'
      }} style={styles.image} />
      <Text style={styles.title}>New Notification</Text>
      <Text style={styles.message}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo vel massa malesuada, vel bibendum velit bibendum.
      </Text>
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 314,
    height: 328,
    position: "absolute",
    top: -20,
    left: 21
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