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
        height: 400, 
    },
    container: {
        backgroundColor: '#391059',
        height: "35%", 
        justifyContent: "center",
        alignItems: "center",
    }
});
