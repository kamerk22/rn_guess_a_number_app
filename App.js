import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components";
import { StartGameScreen, GameScreen, GameOverScreen } from "./src/screens";


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };

  const configureNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  }

  const gameOverHandler = numberOfRound => {
    setGuessRound(numberOfRound);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRound > 0) {
    content = <GameOverScreen numberOfGuess={guessRound} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
      {/* <GameOverScreen numberOfGuess={12} userNumber={22} /> */}
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
