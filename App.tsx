import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function App() {
  // Explicitly type state as a string
  const [drink, setDrink] = useState<string>('No juice yet...');

  const getJuice = async () => {
    try {
      const res = await fetch('http://10.0.2.2:3000/juice');
      const data = await res.json();
      setDrink(data.drink);
    } catch (err) {
      setDrink('Sorry, the juice machine is broken 🥲');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.drinkText}>{drink}</Text>
      <Button title="Order Juice 🥤" onPress={getJuice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drinkText: {
    fontSize: 22,
    marginBottom: 20,
  },
});
