import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput, Button, Divider, Searchbar } from "react-native-paper";
import AppHeader from '../../components/header';
import ScreensContext from '../general_screens/screensContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import getAllExercises from '../../functions/getAllExercises';
import { addRoutine } from '../../functions/addRoutine';
import getUserByEmail from '../../functions/getUserByEmail';
import { updateExercise } from '../../functions/updateExercise';

export default function ExerciseUpdate() {

    const { userInfo, setUserInfo, email } = useContext(ScreensContext);
    const [updatedExercise, setUpdatedExercise] = useState({});
    const navigation = useNavigation();
    const route = useRoute();
    const { exercise, routineId } = route.params;

    useEffect(() => {
        setUpdatedExercise(exercise);
    }, []);

    const handleSaveExercisePress = async () => {
        try {
            const response = await updateExercise(userInfo.id, routineId, exercise.id, updatedExercise)
            if (response.status === 200) {
                Alert.alert('Ejercicio actualizado correctamente');
                const user = await getUserByEmail(email);
                if (user !== null) {
                    setUserInfo(user);
                    navigation.navigate('RoutinesGeneralView');
                }
            } else {
                Alert.alert(response.body);
            }
        } catch (error) {
            console.error('Error al actualizar ejercicio:', error);
        }

    }
    return (
        <View style={styles.container}>
            <AppHeader />
            <KeyboardAwareScrollView style={styles.scrollView}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Editar ejercicio</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: updatedExercise.image }}
                        style={styles.exerciseImage}
                    />
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={[styles.textInfoTitle]}>
                        Nombre:
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={updatedExercise.name}
                        onChangeText={(text) => setUpdatedExercise(prevState => ({ ...prevState, name: text }))}
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
                        Grupo muscular:
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={updatedExercise.muscularGroup}
                        onChangeText={(text) => setUpdatedExercise(prevState => ({ ...prevState, muscularGroup: text }))}
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
                        Último peso (kg):
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={updatedExercise.weight}
                        onChangeText={(text) => setUpdatedExercise(prevState => ({ ...prevState, weight: text }))}
                        mode="outlined"
                        keyboardType="numeric"
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
                        Rango de repeticiones:
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={updatedExercise.reps}
                        onChangeText={(text) => setUpdatedExercise(prevState => ({ ...prevState, reps: text }))}
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
            </KeyboardAwareScrollView>
            <View style={styles.buttonContainer}>
                <Button
                    icon="bookmark-check"
                    mode="contained"
                    onPress={handleSaveExercisePress}
                    buttonColor="#391059"
                    textColor='#ffffff'
                    labelStyle={{ fontSize: 15 }}
                >Guardar
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
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    imageContainer: {

        alignItems: "center",
        margin: 10,
    },
    input: {
        fontSize: 18,
    },
});