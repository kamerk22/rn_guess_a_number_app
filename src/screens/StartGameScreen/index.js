import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableNativeFeedback
} from "react-native";
import Constants from "expo-constants";

export const StartGameScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Choose a Number</Text>
          <TextInput keyboardType="number-pad" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
            >
              <View style={[styles.btnView, styles.reset]}>
                <Text style={[styles.btn]}>RESET</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
            >
              <View style={[styles.btnView, styles.confirm]}>
                <Text style={[styles.btn, styles.white]}>START</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
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
    color: "black"
  },
  confirm: {
    backgroundColor: "#000DFF"
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
