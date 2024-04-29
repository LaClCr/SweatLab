import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Logo from "../assets/logos/SweatLab_Logo_WHITE.png";

const AppHeader = () => {
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.standardLogo}
            />
        </View>
    );
};

export default AppHeader;

const styles = StyleSheet.create({
    standardLogo: {
        resizeMode: "contain",
        height: 200, 
        marginTop: 50,
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#391059',
        height: "20%", 
        justifyContent: "center",
        alignItems: "center",
    }
});
