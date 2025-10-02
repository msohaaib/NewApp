import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  Alert,
} from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');

  const markAttendance = async status => {
    try {
      const res = await fetch('http://10.0.2.2:5000/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: studentId,
          name: studentName,
          status: status,
        }),
      });
      const text = await res.text();
      Alert.alert('Server Response', text);
    } catch (err) {
      Alert.alert('Error', 'Could not connect to server');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>Attendance App</Text>

      <TextInput
        placeholder="Enter Student ID"
        style={styles.TextInput}
        value={studentId}
        onChangeText={setStudentId}
      />
      <TextInput
        placeholder="Enter Student Name"
        style={styles.TextInput}
        value={studentName}
        onChangeText={setStudentName}
      />

      <View style={styles.View}>
        <Button title="Present ✅" onPress={() => markAttendance('Present')} />
        <Button title="Absent ❌" onPress={() => markAttendance('Absent')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  Text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
