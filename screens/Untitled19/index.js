import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
const paymentData = [{
  id: '1',
  date: 'May 1, 2021',
  amount: '$50.00',
  status: 'Paid'
}, {
  id: '2',
  date: 'April 1, 2021',
  amount: '$25.00',
  status: 'Paid'
}, {
  id: '3',
  date: 'March 1, 2021',
  amount: '$30.00',
  status: 'Paid'
}, {
  id: '4',
  date: 'February 1, 2021',
  amount: '$20.00',
  status: 'Paid'
}, {
  id: '5',
  date: 'January 1, 2021',
  amount: '$40.00',
  status: 'Paid'
}];

const PaymentsHistoryScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text style={styles.itemAmount}>{item.amount}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemStatus}>{item.status}</Text>
        <Image source={require('../assets/icons/arrow-right.png')} style={styles.itemArrow} />
      </View>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Payments History</Text>
      <FlatList data={paymentData} renderItem={renderItem} keyExtractor={item => item.id} style={styles.list} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  list: {
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemLeft: {
    flexDirection: 'column'
  },
  itemDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemAmount: {
    fontSize: 14,
    color: '#666'
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  itemArrow: {
    width: 20,
    height: 20
  }
});
export default PaymentsHistoryScreen;