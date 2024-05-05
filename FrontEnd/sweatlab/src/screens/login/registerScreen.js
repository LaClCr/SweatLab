import React, { useContext, useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppHeader from '../../components/loginHeader';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../functions/registerUser';

export default function Login() {

  const { registerInfo, setRegisterInfo } = useContext(ScreensContext);

  const [errorMail, setErrorMail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const navigation = useNavigation();

  const handleNameChange = (text) => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      name: text
    }));
  };
  const handleLastNameChange = (text) => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      lastName: text
    }));
  };

  const handleEmailChange = (text) => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      email: text
    }));
  };
  const handleEmailConfirmChange = (text) => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      emailConfirm: text
    }));
    if (text !== registerInfo.email) {
      setErrorMail(true);
    } else {
      setErrorMail(false);
    }
  }
  const handlePasswordChange = (text) => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      password: text
    }));
  }
  const handlePasswordConfirmChange = (text) => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      passwordConfirm: text
    }));

    if (text !== registerInfo.password) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }

  const emptyFields = () => {
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      name: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      email: '',
      emailConfirm: '',
    }));
  }

  const handleRegisterPress = async () => {
    const ok = true;
    if (registerInfo.email === '' || registerInfo.emailConfirm === '' || registerInfo.password === '' || registerInfo.passwordConfirm === '' || registerInfo.name === '' || registerInfo.lastName === '') {
      Alert.alert('Error', 'No deje campos vacíos');
      emptyPassword();
      ok = false;
    }
    if (errorMail || errorPassword) {
      ok = false;
    }

    if (ok) {
      try {
        const response = await registerUser(registerInfo);
        if (response.status === 200) {
          Alert.alert("Operación realizada", response.body, [
            {
              text: 'Aceptar',
              onPress: () => {
                emptyFields();
                navigation.navigate('Login');
              }
            }
          ]);
        } else if (response.status === 400) {
          Alert.alert("Operación cancelada", response.body, [
            {
              text: 'Aceptar',
              onPress: () => {
                emptyFields();
              }
            }
          ]);
        }
      } catch (error) {
        Alert.alert('Error de inicio de sesión:', error);
      }
    }

  }

  return (
    <View style={styles.container}>
      <AppHeader />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        style={{ flex: 1 }}
        innerRef={ref => {
          this.scroll = ref
        }}
      >
        <View style={styles.inputLittleContainer}>
          <Button icon={"rename-box"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label="Nombre"
            value={registerInfo.name}
            onChangeText={handleNameChange}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            keyboardType="email-address"
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
        <View style={styles.inputLittleContainer}>
          <Button icon={"rename-box"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label="Primer apellido"
            value={registerInfo.lastName}
            onChangeText={handleLastNameChange}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            keyboardType="email-address"
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
        <View style={styles.inputLittleContainer}>
          <Button icon={"email"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label="E-mail"
            value={registerInfo.email}
            onChangeText={handleEmailChange}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            keyboardType="email-address"
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
        <View style={styles.inputLittleContainer}>
          <Button icon={"email"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label={errorMail ? "Los e-mail no coinciden" : "Repita e-mail"}
            value={registerInfo.emailConfirm}
            onChangeText={handleEmailConfirmChange}
            error={errorMail}
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
            label="Contraseña"
            value={registerInfo.password}
            onChangeText={handlePasswordChange}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            secureTextEntry={true}
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
        <View style={styles.inputLittleContainer}>
          <Button icon={"form-textbox-password"} textColor='white' style={styles.iconButton} labelStyle={{ fontSize: 30, }} />
          <TextInput
            label={errorPassword ? "Las contraseñas no coinciden" : "Repita contraseña"}
            value={registerInfo.passwordConfirm}
            onChangeText={handlePasswordConfirmChange}
            error={errorPassword}
            mode="flat"
            outlineColor="#391059"
            activeOutlineColor="#391059"
            secureTextEntry={true}
            style={{ flex: 1, marginRight: 10 }}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <Button
          icon="login-variant"
          mode="contained"
          onPress={handleRegisterPress}
          buttonColor="#ffffff"
          textColor='#391059'
          labelStyle={styles.loginButton}
        >
          Registrarse
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#391059',
    justifyContent: 'center',
  },
  inputLittleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scrollView: {
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.3,
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
