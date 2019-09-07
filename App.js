import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components";
import { StartGameScreen } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
