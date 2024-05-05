import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/header';

export default function Profile() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.container}>
        <Text>Profile</Text>
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