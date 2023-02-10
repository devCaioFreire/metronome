import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Chromatic() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chromatic</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#d7d7d780',
    fontSize: 34
  }
})