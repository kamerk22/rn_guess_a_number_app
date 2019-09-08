import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Constants from "expo-constants";
import color from "./../../constants/color";

export const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const enterdInputHandler = number => {
    setEnteredValue(number.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue();
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    props.onStartGame(chooseNumber)

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Choose a Number</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.textInput}
              blurOnSubmit
              autoCorrect={false}
              maxLength={2}
              onChangeText={enterdInputHandler}
              value={enteredValue} />

            <View style={styles.btnContainer}>
              <TouchableNativeFeedback
                // background={TouchableNativeFeedback.SelectableBackground()}
                onPress={resetInputHandler}
              >
                <View style={[styles.btnView, styles.reset]}>
                  <Text style={[styles.btn, styles.reset]}>RESET</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                // background={TouchableNativeFeedback.SelectableBackground()}
                onPress={confirmInputHandler}
              >
                <View style={[styles.btnView, styles.confirm]}>
                  <Text style={[styles.btn, styles.white]}>START</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    marginBottom: 5,
    fontSize: 20
  },
  textInput: {
    backgroundColor: "rgba(0, 13, 255, 0.05)",
    textAlign: "center",
    fontWeight: "bold",
    height: "35%",
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
    color: "#22292F",
    backgroundColor: '#F1F5F8'
  },
  confirm: {
    backgroundColor: color.brand
  },
  white: {
    color: "white"
  },
  btnContainer: {
    flexDirection: "row",

    justifyContent: "space-between"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignContent: "center",
    alignItems: "center"
  },
  btn: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "300"
  }
});

export default StartGameScreen;
