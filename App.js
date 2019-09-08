import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components";
import { StartGameScreen, GameScreen, GameOverScreen } from "./src/screens";


export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [guessRound, setGuessRound] = useState(0)

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  };

  const gameOverHandler = numberOfRound => {
    setGuessRound(numberOfRound);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {/* {content} */}
      <GameOverScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
