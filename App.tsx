import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text style={styles.Text}>New</Text>
      <Text style={styles.Text}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: 'red',
  },
});
