import React, { useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AppHeader from '../../components/loginHeader';
import ScreensContext from '../general_screens/screensContext';
import { loginValidation } from '../../functions/loginValidation';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const { loginInfo, setLoginInfo } = useContext(ScreensContext);
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      email: text
    }));
  };

  const handlePasswordChange = (text) => {
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      password: text
    }));
  };

  const handleLoginPress = async () => {
    console.log(loginInfo);
    try {
      const response = await loginValidation(loginInfo);
      if (response.status === 200) {
        console.log('Inicio de sesión exitoso');
        navigation.navigate('Main');
        
      } else if (response.status === 401) {
        Alert.alert(response.body, 'Por favor, introduzca bien sus credenciales', [
          {
            text: 'Aceptar',
            onPress: () => {
              setLoginInfo((prevLoginInfo) => ({
                ...prevLoginInfo,
                email: '',
                password: ''
              }));
            }
          }
        ]);
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.fieldInputContainer}>
        <View style={styles.inputLittleContainer}>
          <Button icon={"email"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label="Introduce e-mail"
            value={loginInfo.email}
            onChangeText={handleEmailChange}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            keyboardType="email-address"
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
        <View style={styles.inputLittleContainer}>
          <Button icon={"form-textbox-password"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label="Introduce contraseña"
            value={loginInfo.password}
            onChangeText={handlePasswordChange}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            secureTextEntry={true}
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon="login-variant"
            mode="contained"
            buttonColor="#ffffff"
            textColor='#391059'
            labelStyle={styles.loginButton}
            onPress={handleLoginPress}
          >
            Iniciar sesión
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>¿No tienes cuenta?</Text>
          <Button icon="pencil-plus" mode="contained" buttonColor="#ffffff" textColor='#391059' labelStyle={{ ...styles.loginButton, fontSize: 15, }}>Registrarse</Button>
        </View>
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
  fieldInputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputLittleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconButton: {
    flex: 0.3,
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginButton: {
    fontSize: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
  }
});

