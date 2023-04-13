import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const QuizResultsScreen = () => {
  return <View style={styles.container}>
      <Image source={require('../assets/images/quiz-results-image.png')} style={styles.image} />
      <Text style={styles.title}>Quiz Results</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>You scored</Text>
        <Text style={styles.score}>8/10</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
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
    width: 200,
    height: 200,
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  resultText: {
    fontSize: 20,
    marginRight: 10
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF5733'
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default QuizResultsScreen;