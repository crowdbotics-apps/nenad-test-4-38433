import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BookingAppointmentScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {// handle booking logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Time" value={time} onChangeText={setTime} />
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default BookingAppointmentScreen;