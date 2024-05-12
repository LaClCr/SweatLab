import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { TextInput, Button, Divider, Searchbar } from "react-native-paper";
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';
import getAllExercises from '../../functions/getAllExercises';
import { addRoutine } from '../../functions/addRoutine';
import getUserByEmail from '../../functions/getUserByEmail';


export default function NewRoutine() {

  const { userInfo, setUserInfo } = useContext(ScreensContext);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [exercisesFromDB, setExercisesFromDB] = useState([]);
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [errorName, setErrorName] = useState(false);
  const navigation = useNavigation();


  useEffect(() => {
    getExercisesFromDB();
  }, []);

  const getExercisesFromDB = async () => {
    try {
      const exercises = await getAllExercises();
      setExercisesFromDB(exercises);
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  const toggleExerciseSelection = (exercise) => {
    const index = selectedExercises.indexOf(exercise);
    if (index === -1) {
      setSelectedExercises([...selectedExercises, exercise]);
    } else {
      setSelectedExercises(selectedExercises.filter(ex => ex !== exercise));
    }
  };

  const handleAddPress = () => {
    let ok = true;
    if (name === '') {
      setErrorName(true);
      ok = false;
    }
    if (selectedExercises.length === 0) {
      Alert.alert('Debe seleccionar al menos un ejercicio');
      ok = false;
    }

    if (ok) {
      const routine = {
        name: name,
        exercises: selectedExercises
      };
      AddRoutine(routine);
    }
  };

  const AddRoutine = async (routine) => {
    try {
      const response = await addRoutine(userInfo.id, routine);
      if (response.status === 200) {
        const user = await getUserByEmail(userInfo.email);
        if (user !== null) {
          setUserInfo(user);
          navigation.navigate('RoutinesGeneralView');
        }
      } else {
        Alert.alert(response.body);
      }
    } catch (error) {
      console.error('Error al añadir rutina:', error);
    }
  };


  const filteredExercises = exercisesFromDB.filter((exercise) => {
    const groupName = exercise.muscularGroup.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();
    return groupName.includes(searchQueryLower);
  });

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
            label={errorName ? "Debe introducir un nombre" : "Nombre de la rutina"}
            error={errorName}
            mode="outlined"
            onChangeText={text => setName(text)}
            value={name}
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
        <View style={styles.inputContainer}>
          <Searchbar
            placeholder="Buscar por grupo muscular"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <View style={styles.exercisesContainer}>
          {filteredExercises.map(exercise => (
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
                <Button
                  mode="contained"
                  onPress={() => toggleExerciseSelection(exercise)}
                  buttonColor="#391059"
                  icon={selectedExercises.includes(exercise) ? "check" : "plus"}
                >
                  {selectedExercises.includes(exercise) ? "Añadido" : "Añadir"}
                </Button>
              </View>

            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          icon="bookmark-check"
          mode="contained"
          buttonColor="#391059"
          onPress={handleAddPress}
          textColor='#ffffff'
          labelStyle={{ fontSize: 15 }}
        >Aceptar y guardar rutina
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