import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CalendarScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Calendar</Text>
        <Image source={require('../assets/settings.png')} style={styles.settingsIcon} />
      </View>
      <View style={styles.calendar}>
        {
        /* Calendar component goes here */
      }
      <Text style={styles.GFqqOZwD}>Lorem ipsum…</Text><View style={styles.UGTMPfqb}></View></View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Today's Events</Text>
        <View style={styles.event}>
          <Image source={require('../assets/event.png')} style={styles.eventIcon} />
          <Text style={styles.eventText}>Meeting with John at 2pm</Text>
        </View>
        <View style={styles.event}>
          <Image source={require('../assets/event.png')} style={styles.eventIcon} />
          <Text style={styles.eventText}>Dinner with family at 7pm</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  settingsIcon: {
    width: 24,
    height: 24
  },
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  eventIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  eventText: {
    fontSize: 16
  },
  GFqqOZwD: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  UGTMPfqb: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default CalendarScreen;