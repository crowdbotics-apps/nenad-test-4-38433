import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const TwoRows = () => {
  const navigation = useNavigation();
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Pressable onPress={() => {
        navigation.navigate("addReview");
      }}><View style={styles.section}>
          {
            /* YOUR CODE HERE */
          }
        </View></Pressable>
        <Pressable onPress={() => {
        navigation.navigate("addCardDetails");
      }}><View style={styles.section}>
          {
            /* YOUR CODE HERE */
          }
        </View></Pressable>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  section: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "no-wrap",
    width: 32,
    height: 26
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default TwoRows;