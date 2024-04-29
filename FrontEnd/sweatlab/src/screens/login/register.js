import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/loginHeader';

export default function Login() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.container}>
      <Text>Register</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#391059',
    justifyContent: 'center',
    alignItems: 'center',
  },
});