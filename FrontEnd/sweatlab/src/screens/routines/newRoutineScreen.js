import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInput, Button, Chip, Divider, Card } from "react-native-paper";
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';
import getAllExercises from '../../functions/getAllExercises';

export default function NewRoutine() {

  const { userInfo, setUserInfo } = useContext(ScreensContext);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [exercisesFromDB, setExercisesFromDB] = useState([]);
  const [name, setName] = useState('');
  const [routine, setRoutine] = useState({ name: '', exercises: [] });

  useEffect(() => {
    getExercisesFromDB();
  }, []);

  const getExercisesFromDB = async () => {
    try {
      const exercises = await getAllExercises();
      console.log(exercises);
      setExercisesFromDB(exercises);
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  const toggleExerciseSelection = (exerciseId) => {
    const index = selectedExercises.indexOf(exerciseId);
    if (index === -1) {
      setSelectedExercises([...selectedExercises, exerciseId]);
    } else {
      setSelectedExercises(selectedExercises.filter(id => id !== exerciseId));
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <ScrollView style={styles.scrollView}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crear nueva rutina</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.textInfoTitle]}>
            Nombre:
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="Nombre de la rutina"
            mode="outlined"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            theme={{
              colors: {
                primary: "#391059",
              },
            }}
          />
        </View>
        <Divider />
        <View style={styles.subtitleContainer}>
          <Text style={[styles.textInfoTitle]}>
            Ejercicios:
          </Text>
        </View>
        <View style={styles.exercisesContainer}>
          {exercisesFromDB.map(exercise => (
            <View key={exercise.id} style={styles.exerciseItem}>
              <View style={styles.imageContainer}>
              <Image
                source={{ uri: exercise.image }}
                style={styles.exerciseImage}
              />
              </View>
              <View style={styles.infoContainer}>
              <Text style={styles.exerciseTitle}>{exercise.name}</Text>
              <Text  style={{...styles.exerciseTitle, color: 'gray', marginBottom: 20,}}>GM: {exercise.muscularGroup}</Text>
              <Button
                mode="contained"
                onPress={() => toggleExerciseSelection(exercise.id)}
                buttonColor="#391059"
                icon={selectedExercises.includes(exercise.id) ? "check" : "plus"}
              >
                {selectedExercises.includes(exercise.id) ? "Añadido" : "Añadidir"}
              </Button>
              </View>
              
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon="plus"
            mode="contained"
            buttonColor="#391059"
            textColor='#ffffff'
            labelStyle={{ fontSize: 15 }}
          >Añadir ejercicio personalizado
          </Button>
        </View>
      </ScrollView>
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
    marginBottom: 50,
  },
  exercisesContainer: {
    margin: 5,
  },
  imageContainer:{
    flex: 0.7,
  }, 
  infoContainer:{
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