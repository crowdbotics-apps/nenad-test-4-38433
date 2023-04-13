import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const CardDetailsScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Add Card Details</Text>
      <View style={styles.cardContainer}>
        <TextInput style={styles.input} placeholder="Card Number" />
        <TextInput style={styles.input} placeholder="Cardholder Name" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="MM" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="YY" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Card</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  cardContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  halfInput: {
    flex: 1,
    marginRight: 10
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default CardDetailsScreen;