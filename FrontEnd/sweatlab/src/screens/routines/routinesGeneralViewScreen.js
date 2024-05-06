import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';


export default function RoutinesGeneralView() {
  const { userInfo, setUserInfo, loggedIn } = useContext(ScreensContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!loggedIn) {
      navigation.navigate('LoginStack');
    }
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <AppHeader />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
      >
        {userInfo.routines.length === 0 ? (
          <View style={styles.emptyRoutinesContainer}>
            <Text style={styles.noRoutinesText}>No tienes ninguna rutina registrada</Text>
            <Button
              icon="plus"
              mode="contained"
              buttonColor="#391059"
              textColor='white'
              onPress={() => navigation.navigate('NewRoutine')}
              style={styles.addButton}
              labelStyle={styles.addButton}
            >Añadir rutina</Button>
          </View>
        ) : (
          userInfo.routines.map((routine) => (
            <View key={routine.id}>
              <Text>{routine.name}</Text>
              <Text>{routine.description}</Text>
            </View>
          ))
        )}
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyRoutinesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  noRoutinesText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray',
  },
  addButton: {
    fontSize: 20,
    padding: 10,
    margin: 30,
  },
});
