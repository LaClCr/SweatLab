import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TextInput, Button, Divider, Searchbar } from "react-native-paper";
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';

export default function RoutineDetails() {
  const { selectedRoutine, setSelectedRoutine } = useContext(ScreensContext);

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