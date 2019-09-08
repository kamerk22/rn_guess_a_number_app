import React from 'react';

import { View, StyleSheet, Text, SafeAreaView, TouchableNativeFeedback } from 'react-native';
import GameScreen from '../GameScreen';
import Constants from "expo-constants"
import color from '../../constants/color';

export const GameOverScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>Game Over</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={() => { }}
                >
                    <View style={[styles.btnView]}>
                        <Text style={[styles.btn, styles.reset]}>Restart</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: "7%",
        fontSize: 80,
        marginBottom: "25%",
        marginTop: "25%",
        borderRadius: 20
    },
    btnView: {
        borderRadius: 20,
        paddingHorizontal: 45,
        paddingVertical: 25,
        backgroundColor: color.brand,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    reset: {
        color: "#fff",
    },
    white: {
        color: "white"
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    btn: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold"
    }
});


export default GameScreen;