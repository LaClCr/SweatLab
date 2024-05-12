import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Divider, Searchbar, IconButton } from "react-native-paper";
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import { deleteRoutine } from '../../functions/deleteRoutine';
import getUserByEmail from '../../functions/getUserByEmail';
import { deleteExerciseFromRoutine } from '../../functions/deleteExerciseFromRoutine';

export default function RoutineDetails() {
  const { userInfo, setUserInfo, email } = useContext(ScreensContext);
  const [selectedRoutine, setSelectedRoutine,] = useState({id: null,
  name: "",
  exercises: []});
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const { routine } = route.params;
    setSelectedRoutine(routine);
  }, []);

  const handleDeleteRoutinePress = async () => {
    try {
      const response = await deleteRoutine(userInfo.id, selectedRoutine.id)
      if (response.status === 200) {
        Alert.alert('Rutina eliminada correctamente');
        const user = await getUserByEmail(email);
        if (user !== null) {
          setUserInfo(user);
          navigation.navigate('RoutinesGeneralView');
        }
      } else {
        Alert.alert(response.body);
      }
    } catch (error) {
      console.error('Error al eliminar rutina:', error);
    }
  };

  const handleDeleteExercisePress = async (exerciseId) => {
    try {
      const response = await deleteExerciseFromRoutine(userInfo.id, selectedRoutine.id, exerciseId)
      if (response.status === 200) {
        Alert.alert('Ejercicio eliminado correctamente');
        const user = await getUserByEmail(email);
        if (user !== null) {
          setUserInfo(user);
        }
        const updatedExercises = selectedRoutine.exercises.filter(exercise => exercise.id !== exerciseId);
        setSelectedRoutine(prevState => ({
          ...prevState,
          exercises: updatedExercises
        }));
      } else {
        Alert.alert(response.body);
      }
    } catch (error) {
      console.error('Error al eliminar rutina:', error);
    }
  };

  handleUpdateExercisePress = (exercise) => {
    navigation.navigate('ExerciseUpdate', { exercise: exercise, routineId: selectedRoutine.id});
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <ScrollView style={styles.scrollView}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{selectedRoutine.name}</Text>
        </View>
        <View style={styles.exercisesContainer}>
          {selectedRoutine.exercises.map(exercise => (
            <View key={exercise.id} style={styles.exerciseItem}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: exercise.image }}
                  style={styles.exerciseImage}
                />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.exerciseTitle}>{exercise.name}</Text>
                <Text style={{ ...styles.exerciseTitle, color: 'gray', marginBottom: 20, }}>GM: {exercise.muscularGroup}</Text>
                <Text style={{ ...styles.exerciseTitle, color: 'gray', marginBottom: 20, }}>PESO: {exercise.weight}</Text>
                <Text style={{ ...styles.exerciseTitle, color: 'gray', marginBottom: 20, }}>REPS: {exercise.reps}</Text>
                <View style={{flexDirection: 'row'}}>
                <IconButton
                  mode="contained"
                  icon={"lead-pencil"}
                  iconColor="#ffffff"
                  containerColor='#391059'
                  onPress={() => handleUpdateExercisePress(exercise)}
                />
                <IconButton
                  mode="contained"
                  icon={"trash-can"}
                  iconColor="#ffffff"
                  containerColor='#e65b65'
                  onPress={() => handleDeleteExercisePress(exercise.id)}
                />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          icon="trash-can"
          mode="contained"
          onPress={handleDeleteRoutinePress}
          buttonColor="#e65b65"
          textColor='#ffffff'
          labelStyle={{ fontSize: 15 }}
        >Eliminar rutina
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  titleContainer: {
    margin: 5,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#391059",
    justifyContent: "center",
  },
  subtitleContainer: {
    margin: 5,
    padding: 10,
  },
  inputContainer: {
    margin: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'stretch',
    margin: 5,

  },
  exercisesContainer: {
    margin: 5,
  },
  imageContainer: {
    flex: 0.7,
  },
  infoContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  textInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  exerciseTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#391059",
    textAlign: "center",
    margin: 10,
  },
  exerciseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
  },
});