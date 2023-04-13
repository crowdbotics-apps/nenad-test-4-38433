import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PaymentDetailsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Details</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <Image source={require('../assets/card.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>**** **** **** 1234</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Cardholder Name</Text>
            <Text style={styles.detailText}>John Doe</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Expiration Date</Text>
            <Text style={styles.detailText}>12/23</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>CVV</Text>
            <Text style={styles.detailText}>***</Text>
          </View>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  cardImage: {
    width: 50,
    height: 30,
    marginRight: 10
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  details: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detailText: {
    fontSize: 16
  }
});
export default PaymentDetailsScreen;