import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Divider } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';
import routine_icon from '../../assets/icons/routine_icon.png';


export default function RoutinesGeneralView() {
  const { userInfo, loggedIn, setSelectedRoutine } = useContext(ScreensContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!loggedIn) {
      navigation.navigate('LoginStack');
    }
  }, [userInfo]);

  const handlePressRoutine = (routine) => {
    setSelectedRoutine(routine);
    navigation.navigate('RoutineDetails');
  }

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tus rutinas</Text>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
      >

        {userInfo.routines.length === 0 ? (
          <View style={styles.emptyRoutinesContainer}>
            <Text style={styles.noRoutinesText}>No tienes ninguna rutina registrada</Text>
          </View>
        ) : (
          <>
            {userInfo.routines.map((routine) => (
              <TouchableOpacity 
              key={routine.id} 
              style={styles.routineItemContainer}
              onPress={() => handlePressRoutine(routine)}
              >
                <Image source={routine_icon} style={styles.routineImage}></Image>
                <View>
                  <View style={styles.routineNameContainer}>
                  <Text style={styles.routineName}>{routine.name}</Text>
                  </View>
                  <Text style={styles.routineDescription}>{routine.exercises.length} ejercicios</Text>
                </View>
              </TouchableOpacity>
            ))}

          </>
        )}
      </KeyboardAwareScrollView>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 10,
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
    fontSize: 18,
    padding: 3,
    margin: 20,
  },
  titleContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#391059",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  routineItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  routineImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  routineName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#391059",
    textAlign: "right",
    margin: 10,
  },
  routineDescription: {
    fontSize: 12,
    color: "#391059",
    textAlign: "right",
    margin: 10,
  },
});
