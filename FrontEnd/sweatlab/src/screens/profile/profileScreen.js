import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Divider} from "react-native-paper";
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

  const { userInfo, setUserInfo, setLoggedIn, setEmail } = useContext(ScreensContext);
  const navigation = useNavigation();

  const handleLogOut = () => {
    setUserInfo({
      id: null,
      name: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      weight: null,
      height: null,
      routines: [],
    });
    setEmail('');
    setLoggedIn(false);
    navigation.navigate('LoginStack');
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mi perfil</Text>
        </View>
        <View style={styles.subtitleSectionContainer}>
          <Text style={[styles.textInfoTitle]}>
            Nombre: 
          </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.textInfoSubtitle]}>
            {userInfo.name}
          </Text>
        </View>
        <View style={styles.subtitleSectionContainer}>
          <Text style={[styles.textInfoTitle]}>
            Primer apellido: 
          </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.textInfoSubtitle]}>
            {userInfo.lastName}
          </Text>
        </View>
        <View style={styles.subtitleSectionContainer}>
          <Text style={[styles.textInfoTitle]}>
            E-mail: 
          </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.textInfoSubtitle]}>
            {userInfo.email}
          </Text>
        </View>
        <View style={styles.subtitleSectionContainer}>
          <Text style={[styles.textInfoTitle]}>
            Rutinas añadidas: 
          </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.textInfoSubtitle]}>
            {userInfo.routines.length}
          </Text>
        </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            icon="trash-can"
            mode="contained"
            buttonColor="#e65b65"
            onPress={handleLogOut}
            textColor='#ffffff'
            labelStyle={{ fontSize: 15 }}
          >Cerrar sesión
          </Button>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    margin: 5,
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
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  subtitleSectionContainer: {
    padding: 20,
  },
  textInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  textInfoSubtitle:{
    fontSize: 18,
    textAlign: "right",
  },
  buttonContainer: {
    margin: 10,
  },
});