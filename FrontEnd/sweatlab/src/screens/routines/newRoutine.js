import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/header';

export default function NewRoutine() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.container}>
        <Text>New Routine</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});