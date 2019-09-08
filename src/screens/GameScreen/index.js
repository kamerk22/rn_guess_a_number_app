import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback, SafeAreaView, Alert } from 'react-native';
import color from "./../../constants/color";
import Constants from "expo-constants";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return randomNumber;
}


export const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver, rounds])

    const nextGuessHandle = direction => {
        if ((direction === 'LOW' && currentGuess < props.userChoice) || (direction === 'HIGH' && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie! 🤥 ", " You know that this is wrong...", [{ text: 'Sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'LOW') {
            currentHigh.current = currentGuess;
        }
        if (direction === 'HIGH') {
            currentLow.current = currentGuess
        }
        setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess));
        setRounds(rounds => rounds + 1)

    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Opponent's Guess</Text>
                <Text style={styles.text}>{currentGuess}</Text>
                <View style={styles.btnContainer}>
                    <TouchableNativeFeedback
                        // background={TouchableNativeFeedback.SelectableBackground()}
                        onPress={nextGuessHandle.bind(this, 'LOW')}
                    >
                        <View style={[styles.btnView, styles.reset]}>
                            <Text style={[styles.btn, styles.reset]}>Low</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        // background={TouchableNativeFeedback.SelectableBackground()}
                        onPress={nextGuessHandle.bind(this, 'HIGH')}
                    >
                        <View style={[styles.btnView, styles.confirm]}>
                            <Text style={[styles.btn, styles.white]}>High</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
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
    title: {
        marginBottom: 5,
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        height: "25%",
        width: "75%",
        marginHorizontal: "12%",
        fontSize: 100,
        marginBottom: "25%",
        marginTop: "25%",
        borderRadius: 20
    },
    btnView: {
        borderRadius: 20,
        paddingHorizontal: 45,
        paddingVertical: 25,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    reset: {
        color: "#fff",
        backgroundColor: '#E3342F'
    },
    confirm: {
        backgroundColor: "#38C172"
    },
    white: {
        color: "white"
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold"
    }
});


export default GameScreen;