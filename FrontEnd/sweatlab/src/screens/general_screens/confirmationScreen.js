import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {RoutinesGeneralView} from "../routines/routinesGeneralView";

export default function ConfirmationScreen() {
    const lottieAnimationRef = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        lottieAnimationRef.current.play();
    }, []);

    const handleOKpress = () => {
        navigation.navigate(RoutinesGeneralView);
    };

    return (
        <View style={styles.container}>
            <View style={styles.animationContainer}>
                <LottieView
                    ref={lottieAnimationRef}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={require("../../assets/animations/TickAnimation.json")}
                />
                <Text
                    style={[
                        styles.confirmationText,
                        
                    ]}
                >
                    {("Gestión realizada con éxito.")}
                </Text>
            </View>
            <View style={styles.sectionButton}>
                <Button
                    onPress={handleOKpress}
                    icon="home"
                    mode="contained"
                    buttonColor="#C02830"
                    textColor="#fff"
                >
                    {("VOLVER A INICIO")}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    animationContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    confirmationText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    sectionButton: {
        flex: 0.2,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
    },
});
