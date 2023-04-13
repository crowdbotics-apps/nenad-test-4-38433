import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const LogoutScreen = () => {
  return <View style={_styles.jZZRIIoC}>
      <View style={_styles.BpDJNHUw}>
        <Image source={require('../assets/logout.png')} style={_styles.JlAIaCpv} />
        <Text style={_styles.HeeQfwFi}>Are you sure you want to log out?</Text>
        <View style={_styles.blXQfOSD}>
          <TouchableOpacity style={_styles.BmQiueOi}>
            <Text style={_styles.PPbMmsxC}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.VRHDpqhw}>
            <Text style={_styles.CaGHwIoW}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>;
};

export default LogoutScreen;

const _styles = StyleSheet.create({
  jZZRIIoC: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  BpDJNHUw: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  JlAIaCpv: {
    width: 100,
    height: 100
  },
  HeeQfwFi: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  blXQfOSD: {
    flexDirection: "row",
    marginTop: 20
  },
  BmQiueOi: {
    backgroundColor: "#FF6347",
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  PPbMmsxC: {
    color: "#fff",
    fontSize: 18
  },
  VRHDpqhw: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    padding: 10
  },
  CaGHwIoW: {
    color: "#fff",
    fontSize: 18
  }
});